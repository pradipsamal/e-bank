import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const connection = await mongoose.connect('mongodb://127.0.0.1:27017/banking_admin');
        mongoose.set('debug' , true)
        console.log('mongodb connected');
    } catch (error) {
        console.error('mongodb connection fail');
        process.exit(1);
    }
};

export default connectDB;