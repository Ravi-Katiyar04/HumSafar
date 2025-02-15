import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors'
const app= express();
import connectDB from './db/db.js';
import router from './routes/user.routes.js';
import cookieParser from 'cookie-parser';

connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());


app.get('/',(req, res)=>{
    res.send("Hello world");    
});

app.use('/users', router)

export default app;