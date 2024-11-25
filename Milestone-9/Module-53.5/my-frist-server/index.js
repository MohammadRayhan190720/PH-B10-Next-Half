const express = require('express')
const app = express()
const port = 5000



app.get('/', (req,res)=>{
  res.send("Welcome my frist server!")
})

app.get('/data',(req,res)=>{
  res.send("More data comeing sooooooooooooooon!")
})

app.listen(port, ()=>{
  console.log(`My Frist server running on port ${port}`)
})