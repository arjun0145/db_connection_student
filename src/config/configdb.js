import mongoose from "mongoose";

export async function ConfigureDb(){
    try {
        await mongoose.connect('mongodb://localhost:27017/customer')
        console.log("database connected successfully")

    } catch (error) {

        console.log("error in connectiton with database ")
        
    }
}