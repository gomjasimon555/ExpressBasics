
import courses from './course.json'  assert {type:"json"};

import express from 'express';
const app = express();


app.get("/",(req,res)=>{
  res.send("Hello world");
});

app.get('/api/courses',(req,res)=>{
    res.send(courses);
});

app.get('/api/courses/:id',(req,res)=>{
    const course=courses.find(c => c.id === parseInt(req.params.id));
    if(!course) res.status(404).send("The course with given id was not found")  // 404
    res.send(course);
});

// app.get("/download",(req,res)=>
// {
//   res.sendFile(path.join(__dirname,"../public/download.html"));
// })



const port = process.env.PORT || 4000;
app.listen(port,()=>{
  console.log(`Server started at port ${port}`)
})
