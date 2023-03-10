require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.set('strictQuery', false);

mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', ()=> console.log('Connected to database'))

app.use(express.json())

const photosRouter = require('./routes/photos')
app.use('/photos', photosRouter)


app.listen(27017, () => console.log('Server Started'))
