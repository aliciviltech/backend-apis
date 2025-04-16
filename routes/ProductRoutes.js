import express from 'express'
import { ProductsData } from '../ProductsData.js'

export const ProductRoutes = express.Router()



ProductRoutes.get('/', (req,res)=>{
    res.status(200).send({status:200, message:'success', data:ProductsData})
})

ProductRoutes.get('/:id', (req,res)=>{
    const {id} = req.params;
    const singleProduct = ProductsData.find((product)=>product.id == id)
    
    singleProduct ? res.status(200).send({status:200, param:id, message:'success', data:singleProduct})
    :
    res.status(404).send({status:404, message:"failed", data: 'no data found'})
})

ProductRoutes.post('/', (req,res)=>{

    const checkID = ProductsData.find((product)=> req.body.id == product.id )
    if(checkID){
        res.send('Id already Exists');
    } else{
        ProductsData.push(req.body);
        console.log(ProductsData);
        res.send('created successfully');
    }
})

ProductRoutes.delete('/:id', (req,res)=>{
    const {id} = req.params;
    const updatedData = ProductsData.filter((product)=> product.id != id)
    ProductsData = updatedData;
    console.log(updatedData);
    res.send('deleted sucessfully')
})