import { clerkMiddleware } from '@clerk/express';
import cors from "cors";
import "dotenv/config";
import express from "express";
import connectDB from "./configs/db.js";
import clerkWebhooks from './controllers/clerkWebhooks.js';

connectDB()


const app = express()
app.use(cors())

// middleware
app.use(express.json())
app.use(clerkMiddleware())


app.use("/api/clerk", clerkWebhooks);

app.get('/', (req,res)=> res.send("API is working fine"))

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));