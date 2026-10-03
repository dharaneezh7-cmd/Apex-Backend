import {product} from "../models/product.model.mjs";

export const addproduct = async (req,res)=>
{
    console.log(req.body);
    try
    {
        const Product = new product(req.body);
        await Product.save();
        res.send("Ok")  
    }
   catch(e)
   {
        res.send(e);
   }

}
export const getproduct = async (req,res)=>
{
    console.log("Get product");
    try
    {
        const products = await product.find();

        res.status(200).json(products);
    }
    catch(e)
    {
        console.log(e);
    }
}