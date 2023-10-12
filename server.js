const express = require('express')
const mysql = require('mysql2')


const app=express();

let db=mysql.createPool({
    host:"localhost",
    user:"root",
    password:"Harish@9959",
    database:"my_app"
})

db=db.promise();
app.get("/student",async(req,res)=>{
    try{
        const sql="SELECT * FROM app";
        const [data, error] = await db.query(sql);
        return res.json({status: true,data})
    }catch(error){

        console.log(error)
        return res.send({status: false, error})
    }
})

app.listen(3000,()=>{
    console.log("listening to the server")
})

