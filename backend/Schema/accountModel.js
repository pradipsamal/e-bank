import mongoose from "mongoose";

let accountSchema = new mongoose.Schema({
    trasanctionId : {
        type : String ,
        required : true
    } ,
    accountnumber : {
        type : Number ,
        required : true
    } ,
    name : {
        type : String ,
        required : true
    } ,
    amount : {
        type : Number ,
        required : true
    } ,
    method : {
        type : String ,
        required : true
    } ,
    date : {
        type : String ,
        required : true
    } ,
    time : {
        type : String ,
        required : true
    } ,
    purpose : {
        type :  String ,
        required : true
    } ,
    type : {
        type : String ,
        required : true
    }
})

export const credit = mongoose.model('credit' , accountSchema)

// credit.create({
//     accountnumber : 785268523876 ,
//     depositammount : 1000,
//     depositemethod : 'cash',
//     date : '01-09-2026' ,
//     remark : 'just fun'
// })