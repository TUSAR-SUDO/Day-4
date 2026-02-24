/*
-server create karna 
-server ko config karna

*/
const express = require("express")



const app = express() //server ko create karna

app.use(express.json())

const notes = [
    {
    title : "test title 1",
    description: "test title"
    }
]

app.get("/",(req,res)=>{
    res.send("Hello world")
})
/*  Delete notes */

app.delete("/notes/:index",(req,res)=>{
    delete notes[req.params.index]
    res.send("note deleted succesfully")
})



app.post("/notes",(req,res)=>{
    console.log(req.body)
    notes.push(req.body)
    console.log(notes);
    
    res.send("note Created")
})


app.get("/notes",(req,res)=>{
    res.send(notes)
})

app.patch("/notes/:index",(req,res)=>{
    notes[req.params.index].description = req.body.description
    res.send("Notes upadated Succesfully")
})



module.exports = app