import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import morgan from 'morgan';
import connectDB from './config/db.js';

//configure env
dotenv.config();

//database config
connectDB();

//create rest object
const app = express()

//middleware
app.use(express.json())
app.use(morgan('dev'))

//rest api
app.get('/', (req, res) => {
    res.send({
        message : "Welcome"
    })
})

//port
const PORT = process.env.PORT || 8080;

//run
app.listen(PORT, () => {
    console.log(`server running on ${PORT}`);
})