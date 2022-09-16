import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import * as dotenv from 'dotenv'
dotenv.config()
import connectDb from './connectDb'


const app = express()

app.use(express.json())
app.use(express.urlencoded())

const PORT = 3000
const start = () => {
    try {
        
    connectDb(process.env.MONGO_URI)

    } catch (error) {
        console.log(error);
    }
    app.listen(PORT || 3000, () => console.log('server is listening')) 
}

start();