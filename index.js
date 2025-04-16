import express from 'express'
import dotenv from 'dotenv'
import { albums, comments, photos, posts, todos, users } from './allData.js';
import { ProductRoutes } from './routes/ProductRoutes.js';
import { stationaryData } from './Data/stationary.js';
import { gulahmedData } from './Data/gulahmed.js';


const app = express();
dotenv.config()

app.use(express.json())

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
app.get('/stationary-data',(req,res)=>{
    res.status(200).send({status:200,message:"success",data:stationaryData})
})
app.get('/gulahmed-data',(req,res)=>{
    res.status(200).send({status:200,message:"success",data:gulahmedData})
})



app.use('/products', ProductRoutes);



const PORT = process.env.PORT;
console.log(PORT)


app.listen(PORT,()=>{
    console.log('server started')
})