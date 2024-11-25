const express = require('express');
var cors = require("cors");
const phones = require('./phones.json');
const app = express();
const port = 5000;

//middleware
app.use(cors());


app.get('/', (req, res)=>{
  res.send('My Phone Server is runnnnnnnning now!')
})

app.get('/contact',(req, res)=>{
  res.send('My contact server is runnnnnnning noooooooow!')
})

app.get('/phones', (req,res)=>{
  res.send(phones)
})

app.get('/phones/:id', (req, res)=>{
  const id = parseInt(req.params.id);
  console.log("i need data for Id", id)

  const phone = phones.find(phone => phone.id === id) ||{};
  res.send(phone);
})

app.listen(port, ()=>{
  console.log(`My Phone server is running at Port ${port}`)
})