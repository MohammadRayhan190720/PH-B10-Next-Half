const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

//use middleware
app.use(cors());

const users =[
  {id:1, name: "tamanna", email: "tamanna@gmail.com"},
  {id:2, name: "rayhan", email: "rayhan@gmail.com"},
  {id:3, name: "jakia", email: "jakia@gmail.com"},
]


app.get('/', (req, res) => {
  res.send("User management server is running ")
})

app.get('/users', (req, res) => {
  res.send(users)
})

app.listen(port, () => {
  console.log(`user managment server in running port ${port}`)

})