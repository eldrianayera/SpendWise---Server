// user = dbUser
// password = spendwise
import dotenv from "dotenv";
dotenv.config()

import express , {Express } from "express";
import mongoose from "mongoose";

const app: Express = express()
const port = process.env.PORT || 3001;

app.use(express.json())

const mongoURI: string = process.env.MONGO_URI || ""

mongoose
.connect(mongoURI)
.then(()=> console.log("CONNECTED TO MONGODB"))
.catch((err)=> console.error("Failed to connect to MongoDB"))

app.listen(port, ()=>{
    console.log(`Server Running on Port ${port}`);
    
})
