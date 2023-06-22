import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoute.js';
import cors from "cors";
//configure env
dotenv.config();

//database config
connectDB();

//create rest object
const app = express()

//middleware
app.use(cors());
app.use(express.json())
app.use(morgan('dev'))

//routes
app.use('/api/v1/auth', authRoutes)

//rest api
app.get("/", (req, res) => {
    res.send("<h1>Welcome to ecommerce app</h1>");
  });

//port
const PORT = process.env.PORT || 8080;

//run
app.listen(PORT, () => {
    console.log(`server running on ${PORT}`.bgCyan.white);
})