import { Router } from "express";
import ProductManager from "../controllers/ProductManager.js";
import __dirname from "../utils.js";

const pmanager=new ProductManager(__dirname+'/models/products.json')

const router=Router()

router.get("/",async(req,res)=>{
  const listaproductos=await pmanager.getProducts({})
  res.render("home",{listaproductos})
})

router.get("/realtimeproducts",async(req,res)=>{
   res.render("realTimeProducts")
})

export default router