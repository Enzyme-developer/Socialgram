import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import connectDb from './connectDb'


const app = express()

app.use(express.json())
app.use(express.urlencoded())

const PORT = 3000
const start = (process.env.MONGO_uRI) => {
    connectDb(uri)
    app.listen(PORT || 3000, () => console.log('server is listening')) 
}