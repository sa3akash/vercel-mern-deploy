/* eslint-disable no-undef */
import express from 'express';
import cors from 'cors';
import env from 'dotenv';
import { posts } from './data.js';

const app = express();

env.config()

app.use(cors())

app.get('/api/test',(req,res)=>{
    res.json({message: `Post get successful.`,posts: posts});  
})


if(process.env.PORT){
    app.listen(process.env.PORT)
}

export default app;