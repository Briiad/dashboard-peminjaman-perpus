import mongoose from "mongoose";

export const connectDB = async () => {
  try{
    await mongoose.connect('mongodb+srv://briiiad:brianadit33@cluster0.irjsxok.mongodb.net/')
    console.log('Database connected')
  } catch (err) {
    console.log(err)
  }
}

export default connectDB;