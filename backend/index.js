const express=require('express');
const cors=require('cors')
const dotenv=require('dotenv')
const {connection}=require("./db");
const {errorMiddleware} = require("./middleware/errorMiddleware")

const app=express();
dotenv.config({path: "./config.env"});

app.use(cors({
    origin:[process.env.FRONTEND_URL],
    methods:["GET","POST","DELETE","PATCH"],
    credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({extended: true}))

connection();
app.use(errorMiddleware)

app.listen(process.env.PORT, ()=>{
   
    console.log(`server running at port ${process.env.PORT} `)
})