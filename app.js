const { readFileSync, readFile } = require("fs");
const home= readFileSync("index.html");
const contact=readFileSync("contact.html");
const writeus=readFileSync("writeus.html");
const about =readFileSync("about.html");

const http= require("http");
const express= require("express");


const app=express();
const port=80;








 app.get("/",(req,res)=>{ res.end(home) });
app.get("/contact",(req,res)=>{res.end(contact)});
app.get("/writeus",(req,res)=>{res.end(writeus)});
app.get("/about",(req,res)=>{res.end(about)})


app.listen(80, ()=>{});
