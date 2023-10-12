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

////////////////
// const express=require('express')

// const mysql=require('mysql2')

// const csv = require('csv-parser');

// const fs=require("fs")

// const EventEmitter = require('events')

// const readline=require('readline')

// const app=express()

// const csvpath = './myfile.csv'; 

// const jsonpath='./output.json'

// let db=mysql.createPool({
//   host:"localhost",
//   user:"root",
//   password:"Harish@9959",
//   database:"my_app"
// }).promise()


//   function converter(csvpath,jsonpath){

//     const readableStream = fs.createReadStream(csvpath);
//     const writableStream = fs.createWriteStream(jsonpath);
    
//     readableStream
//       .pipe(csv())
//       .on ('data',(row) => {
       
      
//         writableStream.write(JSON.stringify(row) + '\n');

//         console.log(row.hero,row.description)
//       })
//       .on('end', () => {
//         writableStream.end();
//       });
//     }
  


// converter(csvpath,jsonpath)

// // console.log(row.hero)


   
 
// app.listen(3000,()=>{
//     console.log("listening to the port 3000")
// })

// const http=require('http')



----------------------------
// const http=require("http");

// const fs=require("fs")

// const myurl=require('url');
// // const { url } = require("inspector");

// const server=http.createServer((req,res)=>{

//   if (req.url==='/favicon.ico'){
//     return res.end()
//   }

//   const parsedurl=myurl.parse(req.url,true)
//   console.log(parsedurl)
//   const logo=`${Date.now()}:requested the new url and the url name is ${req.url}\n`
//    fs.appendFile("allurl.txt",logo,(err,data)=>{
//     switch(myurl.pathname){
//       case "/hello":
//         res.write("you have acesed to the main page");
//         res.end()
//         break;
//       case "/home":
//         const displayname=myurl.query.name;
//         res.write("hello"+displayname)
//         res.end("you have entered to home page");
//         break;
//       case "/about":
//         res.end("about pagae")
//       default:
//         res.end("error 404 : page not found")
//         break;
//     }
//    })
// })

// server.listen(3000,()=>{
//   console.log("listening to port 3000")
// })

hi team
todays update

1) gone through Introduction to Express.js
Routing and  middleware
2)worked on crud operations 




good morning team 
today topics to cover
1)CRUD Operations (POST GET  PUT DELETE)
2)continuing task 



salla anusha (19/12/2001)
salla bhagyabati (07/05/1977)

node --experimental-modules index.mjs

