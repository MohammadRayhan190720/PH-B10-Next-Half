const express = require('express');
const cors = require('cors');
require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors())
app.use(express.json())



//mongodb connection
// console.log(process.env.DB_USER)
// console.log(process.env.DB_PASS)


const uri =
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ybate.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;


// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();

    const coffeeCollection = client.db('coffeeDB').collection('coffees')

    //for userCollection

    const userCollection = client.db('userDB').collection('users')

  //read => get request
  app.get('/coffee',async(req,res)=>{
    const cursor = coffeeCollection.find();
    const result = await cursor.toArray();
    res.send(result);
  })

  //load a uniqe coffe for update

    app.get('/coffee/:id',async(req,res)=>{
      const id = req.params.id;
      const query = { _id: new ObjectId(id)}
      const result = await coffeeCollection.findOne(query);
      res.send(result);
    })


  //create => post request
 app.post('/coffee', async (req,res)=>{
  const newCoffee = req.body;
  console.log(newCoffee);

  const result = await coffeeCollection.insertOne(newCoffee)
  res.send(result)
 })

 //update => put request

 app.put('/coffee/:id', async (req,res)=>{
  const id = req.params.id;
  const filter = { _id: new ObjectId(id)}
  const options = { insert: true}
  const coffees = req.body;

  const updateCoffee = {
    $set: {
      name: coffees.name,
      chef: coffees.chef,
      supplier: coffees.supplier,
      taste: coffees.taste,
      category: coffees.category,
      details: coffees.details,
      photo: coffees.photo,
    },
  };

  const result = await coffeeCollection.updateOne(filter, updateCoffee, options);

  res.send(result);
 })

 //delete => delete request

 app.delete('/coffee/:id', async (req,res)=>{
  const id = req.params.id;
 const query ={ _id: new ObjectId(id)}
 const result = await coffeeCollection.deleteOne(query)
 res.send(result)
 })


//  for users Apis

app.get('/users',async (req,res)=>{
  const cursor = userCollection.find();
  const result = await cursor.toArray();

  res.send(result);
})

//post request

app.post('/users',async (req, res)=>{
  const newUser = req.body;
  console.log("created new user",newUser);

  const result = await userCollection.insertOne(newUser);
  res.send(result);
})

//patch => update request

app.patch('/users/:email', async (req, res)=>{
  const email = req.params.email;
  const filter = {email}
  const updatedDoc = {
    $set: {
      lastSignInTime: req.body?.lastSignInTime,
    },
  };
  const result = await userCollection.updateOne(filter,updatedDoc)
  res.send(result);
})

//delete request
app.delete('/users/:id', async (req, res)=>{
  const id = req.params.id;
  const query ={_id: new ObjectId(id)}
  const result = await userCollection.deleteOne(query);
  res.send(result);
})




    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.get('/', (req,res)=>{
  res.send("Coffee store server is running")
})

app.listen(port, ()=>{
  console.log(`coffee store server is running on port ${port}`)
})