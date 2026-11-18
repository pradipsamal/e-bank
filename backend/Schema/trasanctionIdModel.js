import mongoose, { mongo } from "mongoose";

let trasanctionIdSchema = new mongoose.Schema({
    trasanctionNumber : {
        type : Number , 
        required : true
    }
})

export const trasanctionsids = mongoose.model('trasanctionsids' , trasanctionIdSchema)

// trasanctionsids.create({
//     trasanctionNumber : 1000
// })