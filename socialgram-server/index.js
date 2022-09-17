const connectDb = require('./db/connect')
const express = require('express');
require('dotenv').config()


const app = express()
app.use(express.json())
// app.use(express.urlencoded())


const PORT = process.env.PORT || 3000;

const start = async () => {
    try {
        await connectDb(process.env.MONGO_URI)
        app.listen(PORT, () => console.log(`server is listening on ${PORT}`))
    } catch (error) {
        console.log(error);
    } 
}

start();