import express from "express";
import { addproduct, getproduct } from "../products/product.mjs";
const router = express.Router()

router.get("/products",(req,res)=>
{
    console.log("Fine");
    res.send("fine");
})

router.post("/addproduct",addproduct)
router.get("/getproduct",getproduct)


export default router;