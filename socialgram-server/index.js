import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'

const app = express()

app.use(express.json())
app.use(express.urlencoded())

const PORT = 3000
app.listen(PORT || 3000, () => console.log('server is listening')) 