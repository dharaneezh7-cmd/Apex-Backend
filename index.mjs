import express from 'express'
import { configDotenv } from 'dotenv';
import cors from 'cors'
import { db } from './src/config/db.mjs';
import productrouter from './src/router/product.mjs';

//=============DOTENV=============
configDotenv();

//Express app initialization
const app = express();

//Cors policy
app.use(cors({
    origin: "http://localhost:5173"
}));

//Variables
const port = process.env.PORT; 

await db();


app.use(express.json());


app.use("/api",productrouter)

//APIs
app.get("/api/health",(req,res)=>
{
    res.send(
        {
            status:true,
            msg:"Apex-Backend Health verfication is successfull"
        }
    )
})














app.listen(port,()=>
    {
        console.log(`Server is listening at port number ${port}`);
    }
)