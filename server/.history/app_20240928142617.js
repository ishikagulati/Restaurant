import express from "express";
import cors from 'cors';
import dotenv from "dotenv";
import db
const app = express();

dotenv.config({path : './configconfig.env'})


app.use(cors({
    origin:[process.env.FRONTEND_URL],
    methods:[POST],
    credentials:true

}))

app.use(express.json());
app.use(express.urlencoded({extended:true}));

export default app;