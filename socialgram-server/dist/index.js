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
const express = require('express');
const connectDb = require('./db/connect');
require('dotenv').config();
const app = express();
app.use(express.json());
// app.use(express.urlencoded())
app.get('/', (req, res) => {
    res.send('Express + TypeScript Server');
});
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
