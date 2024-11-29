const express = require('express');
const app = express();
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require("mongodb");
const port = process.env.PORT || 5000;

//middleware
app.use(cors())
app.use(express.json());

// gkYiXqlA3ZnlBmFe;
// rafirayhan260;

//connection to mongoDB
const uri =
  "mongodb+srv://rafirayhan260:gkYiXqlA3ZnlBmFe@cluster0.ybate.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

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
    await client.connect();

        const database = client.db("usersDB");
        const userCollection = database.collection("users");

    //creat data => post request
   
    app.post('/users', async(req,res)=>{
      const user = req.body;
      console.log("new user",user)
         const result = await userCollection.insertOne(user);
         res.send(result);
    })





    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!!!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.log);



app.get('/', (req,res)=>{
  res.send('Simple CRUD operation server running')
})

app.listen(port, ()=>{
  console.log(`simple CRUD operation running on port ${port}`)
})