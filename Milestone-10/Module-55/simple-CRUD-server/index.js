const express = require('express');
const app = express();
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
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

        // const database = client.db("usersDB");
        // const userCollection = database.collection("users");
        const userCollection = client.db('usersDB').collection("users");

      //read many data => get request => step-2
      app.get('/users', async (req, res) =>{
        const curson = userCollection.find();
        const result = await curson.toArray();
        res.send(result);
      })

      //read single data => get request => step-4
      app.get('/users/:id', async (req, res) =>{
        const id = req.params.id;
        
        const query = { _id: new ObjectId(id)}
        const result = await userCollection.findOne(query);
        res.send(result);
      })

    //creat data => post request => step-1
   
    app.post('/users', async(req,res)=>{
      const user = req.body;
      console.log("new user",user)
         const result = await userCollection.insertOne(user);
         res.send(result);
    })

    // update data => put request

    app.put('/users/:id',async(req,res)=>{
      const id = req.params.id;
      const updateUser = req.body;
      console.log("update user",updateUser)

      //update in the database

      const filter ={ _id: new ObjectId(id)}
      const options = {upsert: true}

      const updatedUser = {
        $set: {
          name: updateUser.name,
          email: updateUser.email,
        }
      }

      const result = await userCollection.updateOne(filter, updatedUser, options)
      res.send(result);
    })

    //delete data => step-3

    app.delete('/users/:id',async(req,res)=>{
      const id = req.params.id;
      console.log("please delete id",id)

      const query = { _id: new ObjectId(id)}
      const result = await userCollection.deleteOne(query);
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