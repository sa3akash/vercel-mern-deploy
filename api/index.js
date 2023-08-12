/* eslint-disable no-undef */
import express from 'express';
import cors from 'cors';
import env from 'dotenv';
import post from './data.json'

const app = express();

env.config()

app.use(cors())

app.get('/api/test',(req,res)=>{
    res.json({message: `Post get successful.`,posts: post.posts});  
})


if(process.env.PORT){
    app.listen(process.env.PORT)
}

export default app;