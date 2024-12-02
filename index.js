import express from 'express'
import dotenv from 'dotenv'
import { albums, comments, photos, posts, todos, users } from './allData.js';


const app = express();
dotenv.config()


app.get('/',(req,res)=>{
    res.status(200).send('welcome backed')
})
app.get('/posts',(req,res)=>{
    res.status(200).send({status:200,message:"success",data:posts})
})
app.get('/comments',(req,res)=>{
    res.status(200).send({status:200,message:"success",data:comments})
})
app.get('/albums',(req,res)=>{
    res.status(200).send({status:200,message:"success",data:albums})
})
app.get('/photos',(req,res)=>{
    res.status(200).send({status:200,message:"success",data:photos})
})
app.get('/todos',(req,res)=>{
    res.status(200).send({status:200,message:"success",data:todos})
})
app.get('/users',(req,res)=>{
    res.status(200).send({status:200,message:"success",data:users})
})

const PORT = process.env.PORT;
console.log(PORT)


app.listen(PORT,()=>{
    console.log('server started')
})