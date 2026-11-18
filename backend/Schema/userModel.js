import mongoose from "mongoose";

let usersSchema = new mongoose.Schema({
    accountnumber : {
        type : Number ,
        required : true
    } ,
    balance : {
        type : Number ,
        default : 0
    } ,
    fullName : {
        type : String ,
        required : true
    } ,
    email : {
        type : String ,
        required : true ,
        unique : true
    } ,
    password : {
        type : String ,
        required : true
    } ,
    mobile : {
        type : Number ,
        required : true
    } ,
    gender : {
        type : String ,
        required : true
    } ,
    fatherName : {
        type : String ,
        required : true
    } ,
    aadhaar : {
        type : Number ,
        required : true ,
        unique : true
    } ,
    pan : {
        type : String ,
        unique : true
    } ,
    address : {
        type : String ,
        required : true
    }
})

export const users = mongoose.model('users' , usersSchema)

// users.create({
//     accountnumber : 7865746827263 ,
//     username : 'Pradip Samal',
//     email : 'pradip@gmail.com',
//     password : 'Pradip@02',
//     mobile : 9692793900,
//     gender : 'male' ,
//     fathername : 'Dillip Samale',
//     aadharnumber : 787878787878,
//     address : 'Nageswar tangi'
// })