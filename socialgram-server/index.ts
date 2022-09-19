const express = require('express');
const connectDb = require('./db/connect')
require('dotenv').config()
require('express-async-errors');
const notFound = require('./middleware/notFound');
const errorHandlerMiddleware = require('./middleware/errorHandler');
const authRoute = require('./routes/auth')

const app = express()
app.use(express.json());


app.use('/', authRoute)

//middleware
app.get('/', (req: any, res:any) => {
    res.send('hello world')
})

app.use(notFound);
app.use(errorHandlerMiddleware);


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
export {}