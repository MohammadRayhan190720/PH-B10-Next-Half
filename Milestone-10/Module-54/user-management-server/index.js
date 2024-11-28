const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

//use middleware
app.use(cors());
app.use(express.json());

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

app.post('/users', (req, res) => {
  console.log("post api hitting")
  console.log(req.body)
  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);
  res.send(newUser);

})

app.listen(port, () => {
  console.log(`user managment server in running port ${port}`)

})