import express from 'express'
import connectDB from './db.js'
import {users} from './Schema/userModel.js'
import { credit } from './Schema/accountModel.js'
import cors from 'cors'
import { trasanctionsids } from './Schema/trasanctionIdModel.js'
import bcrypt from 'bcrypt'



const app = express()

app.use(express.json())
app.use(cors())

connectDB()

app.post('/addusers' , async (req , res)=>{
    try{
        const {fullName , email , password , mobile , gender , fatherName , aadhaar , address , pan} = req.body
        
        let accountNumber = ''
        for(let i = 0 ; i < 12 ; i++){
            let randNumber = Math.floor(Math.random() *10)
            accountNumber += randNumber
        }
            
        bcrypt.genSalt(10 ,  (err , salt)=>{
            bcrypt.hash(password , salt , async (err , hash)=>{
                const addUsers = new users({
                    accountnumber : accountNumber,
                    fullName : fullName.trim() ,
                    email : email.trim() , 
                    password : hash ,
                    mobile : mobile.trim() ,
                    gender ,
                    fatherName : fatherName.trim() ,
                    aadhaar : aadhaar.trim() ,
                    address : address.trim() ,
                    pan : pan.trim()
                })

                await addUsers.save()

                res.status(201).json({
                    success : true ,
                    message : 'Account create successfully.' ,
                    data : addUsers
                })
            })
        })
    }
    catch (err){
        res.status(500).json({
            success : false ,
            message : err.message
        })
    }
})

app.get('/allusers' , async (req , res)=>{
    try{
        let allUsers = await users.find()
        
        res.status(200).json({
            success : true ,
            message : '' ,
            data : allUsers
        })
    }
    catch(err){
        res.status(204).json({
            success : false ,
            message : 'Something went wrong'
        })
    }
})

app.post('/creditwithdraw' , async (req , res)=>{
    try{
        let {accountnumber , amount , type , method , purpose} = req.body
        let now = new Date()
        let today = now.toDateString().split(' ')[2] + ' ' + now.toDateString().split(' ')[1] + ' ' + now.toDateString().split(' ')[3]
        let currentTime = now.toLocaleTimeString().split(' ')[0].split(':')[0] + ":" + now.toLocaleTimeString().split(' ')[0].split(':')[1] + " " + now.toLocaleTimeString().split(' ')[1] 
        
        let user = await users.findOne(
            {accountnumber}
        )

        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'Account not found'
            })
        }

        let getTransactionId = await trasanctionsids.findOneAndUpdate(
            {} ,
            {
                $inc : {
                    trasanctionNumber : 1
                }
            } ,
            {
                new : true
            }
        )

        let generateTrasactionId = `TNX-${getTransactionId.trasanctionNumber}`

        if(type == 'Credit'){
            await users.updateOne(
                { accountnumber },
                { $inc: { balance: Number(amount) } }
            )
            res.status(200).json({
                success: true,
                message: 'Amount credited successfully',
                data: user
            });
        }
        else if(type == 'Debit'){
            await users.updateOne(
                { accountnumber },
                { $inc: { balance: -Number(amount) } }
            )
            res.status(200).json({
                success: true,
                message: 'Amount debited successfully',
                data: user
            });
        }

        let addCredit = new credit({
            name : user.fullName ,
            accountnumber  ,
            trasanctionId : generateTrasactionId ,
            amount ,
            method ,
            date : today ,
            time : currentTime ,
            purpose ,
            type
        })

        await addCredit.save()
    }
    catch(err){
        console.error(err);
        res.status(500).json({
            success: false,
            message: 'Something went wrong'
        });
    }
})

app.get('/allcreditdebit' , async (req , res)=>{
    try{
        let allOperations = await credit.find()

        res.status(200).json({
            success : true ,
            message : '',
            data : allOperations
        })
    }
    catch(err){

    }
})

app.post('/deleteaccount' , async (req , res)=>{
    try{
        let {accountnumber , mobile , fullName} = req.body
        let user = await users.findOne({accountnumber})
        if(!user){
            res.status(404).json({
                success : false ,
                message : 'Account not found'
            })
        }

        await users.deleteOne({accountnumber})

        res.status(200).json({
            success : true ,
            message : 'Account delete successfull'
        })
    }
    catch(err){
        res.status(400).json({
            success : false ,
            message : 'Invalid Account Number'
        })
    }
})


const PORT = 3200
app.listen(PORT , ()=>{
    console.log(`🚀 Server run on port ${PORT}`)
})