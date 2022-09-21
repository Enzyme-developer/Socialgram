"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const connectDb = require('./db/connect');
require('dotenv').config();
require('express-async-errors');
const notFound = require('./middleware/notFound');
const errorHandlerMiddleware = require('./middleware/errorHandler');
const authRoute = require('./routes/auth');
const userRoute = require('./routes/user');
const postRoute = require('./routes/post');
const app = express();
app.use(express.json());
//Routes
app.use('/', authRoute);
app.use('/user', userRoute);
app.use('/post', postRoute);
app.get('/', (req, res) => {
    res.send('hello world');
});
//Middlewares
app.use(notFound);
app.use(errorHandlerMiddleware);
const PORT = process.env.PORT || 5000;
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield connectDb(process.env.MONGO_URI);
        app.listen(PORT, () => console.log(`server is listening on ${PORT}`));
    }
    catch (error) {
        console.log(error);
    }
});
start();
