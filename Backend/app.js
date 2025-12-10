import express from 'express'

const app = express();
app.get('/',(req,res)=>{
    res.send("Hello World");  
})
app.listen(3000,(req,res)=>{
    console.log("App is ruuing on port no 3000");
});