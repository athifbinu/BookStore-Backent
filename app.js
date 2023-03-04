const express = require('express');
const app = express();
const connection=require('./Databse/Connection')
const router = require('./routes/book-routes')
const cors = require('cors')


//Middlewars

app.use(express.json())

app.use(cors())

app.use("/books",router) // localhost:5000/books

app.get('/',(req,res)=>{
    res.json("backent success")
})


app.listen(5000, ()=> {
    console.log("server started port 5000")
})


// qYbg2WnQd1UI6qYd
