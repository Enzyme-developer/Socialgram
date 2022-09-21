const express = require('express');
const connectDb = require('./db/connect')
require('dotenv').config()
require('express-async-errors');
const notFound = require('./middleware/notFound');
const errorHandlerMiddleware = require('./middleware/errorHandler');
const authRoute = require('./routes/auth')
const userRoute = require('./routes/user')
const postRoute = require('./routes/post')

const app = express()
app.use(express.json());


//Routes
app.use('/', authRoute)
app.use('/user', userRoute)
app.use('/post', postRoute)


app.get('/', (req: any, res:any) => {
    res.send('hello world')
})


//Middlewares
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