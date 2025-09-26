import dotenv from "dotenv";
dotenv.config()


import express , {Express } from "express";
import mongoose from "mongoose";
import financialRecordRouter from "./routes/financial-records"

const app: Express = express()
const port = process.env.PORT || 3001;

app.use(express.json())

const mongoURI: string = process.env.MONGO_URI || ""

mongoose
.connect(mongoURI)
.then(()=> console.log("CONNECTED TO MONGODB"))
.catch((err)=> console.error("Failed to connect to MongoDB"))

app.use("/financial-records", financialRecordRouter)

app.listen(port, ()=>{
    console.log(`Server Running on Port ${port}`);
    
})
