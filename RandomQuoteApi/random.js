//Create an api that returns random quote to the user

import quotes from './random.json'  assert {type:"json"};

//this quotes will be name of the file
//second quotes will be array name from json file

import express from 'express';
const app = express();



const getRandomIndex=()=>{
    return Math.floor(Math.random()* quotes.quotes.length)
}


app.get("/",(req,res)=>{
    res.send("Hello world");
  });

app.get("/quotes",(req,res)=>{
    // const quote = quotes.quotes[Math.floor(Math.random()*quotes.quotes.length)];
    // res.json(quote)

    res.json(quotes.quotes[getRandomIndex()].quote)
})


app.get("*",(req,res)=>
{
    res.send("<h1 style='color:red'>Page Not Found </h1>")
})

const port = process.env.PORT || 4000;
app.listen(port,()=>{
  console.log(`Server started at port ${port}`)
})
