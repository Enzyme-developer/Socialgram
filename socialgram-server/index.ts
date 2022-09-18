const express = require('express');
const connectDb = require('./db/connect')
require('dotenv').config()


//middleware
const app = express()
app.use(express.json())



app.get('/', (req: Request, res: { send: (arg0: string) => void; }) => {
    res.send('Express + TypeScript Server');
  });


const PORT = process.env.PORT || 5000;

const start = async () => {
    try {
        await connectDb(process.env.MONGO_URI)
        app.listen(PORT, () => console.log(`server is listening on ${PORT}`))
    } catch (error) {
        console.log(error);
    } 
}

start();
