/* eslint-disable no-undef */
import express from 'express';
import cors from 'cors';
import env from 'dotenv';

const app = express();

env.config()

app.use(cors())

app.get('/api/test',(req,res)=>{
    res.json({message: `hello world! ${Date.now()}`});  
})


if(process.env.PORT){
    app.listen(process.env.PORT)
}

export default app;