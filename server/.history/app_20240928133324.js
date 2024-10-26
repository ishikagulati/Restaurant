import express from "express";
import cors from 'cors';
import dotenv from "dotenv";

const app = express();

dotenv.config({path : './configconfig.env'})


app.use(cors({
    origin:[.env.FRONTEND_URL],
    methods:[],
    credentials:[]

}))

export default app;