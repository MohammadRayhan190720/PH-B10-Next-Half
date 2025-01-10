const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { MongoClient, ServerApiVersion } = require("mongodb");


const port = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());


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

    const menuCollection = client.db("Bristro_Boss").collection("menu");
    const reviewCollection = client.db("Bristro_Boss").collection("reviews");
    const cartCollection = client.db("Bristro_Boss").collection("carts");
    

    app.get('/menu', async(req,res) =>{
      const cursor = menuCollection.find()
      const result = await cursor.toArray();
      res.send(result)
    })
    app.get('/reviews', async(req,res) =>{
      const cursor = reviewCollection.find()
      const result = await cursor.toArray();
      res.send(result)
    })

    //cart related apis
    app.get('/carts',async(req,res) =>{
      const email = req.query.email;
      const query = {email : email};
      const result = await cartCollection.find(query).toArray()
      res.send(result)
    })

    app.post('/carts',async(req,res) =>{
      const cartItem = req.body;
      const result = await cartCollection.insertOne(cartItem)
      res.send(result)
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




app.get("/", (req, res) => {
  res.send("Hello from bristro_boss Server....");
});

app.listen(port, () => console.log(`Server running on port ${port}`));
