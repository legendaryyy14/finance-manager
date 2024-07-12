// pwd: mnNzS8KDer2SlaPl
import express, { Express } from "express";
import mongoose from "mongoose";
import FinancialRecordRouter from './routes/financial-records'
import cors from "cors";

const app: Express = express();
const port = process.env.PORT || 3001

app.use(express.json());
app.use(cors())

const mongoURI: string = "mongodb+srv://jamiecardona:mnNzS8KDer2SlaPl@personalfinancetracker.hlx5ysn.mongodb.net/"

mongoose.connect(mongoURI).then(() => console.log("Connected to MongoDB!")).catch((err) => console.error("Failed to connect to MongoDB:", err))

app.use("/financial-records", FinancialRecordRouter)

app.listen(port, () => {
    console.log(`Server Running on Port ${port}`)
})
