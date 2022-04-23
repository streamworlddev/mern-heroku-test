import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import userRouter from './Routers/userRouter.js'
import cors from 'cors';
dotenv.config()

const app = express()

app.use(cors({origin: 'http://localhost:3000'}))
app.use(express.json())
app.use("/users",userRouter);

app.listen(process.env.PORT || 5000,() => {
    mongoose.connect(process.env.DB_CONNECTION_STRING)
    .then(() => console.log('connected to db'))
    .catch((error) => console.log(error))
})
