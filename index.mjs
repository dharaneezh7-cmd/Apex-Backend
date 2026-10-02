import express from 'express'
import { configDotenv } from 'dotenv';


//=============DOTENV=============
configDotenv();

//Express app initialization
const app = express();


//Variables
const port = process.env.PORT; 


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