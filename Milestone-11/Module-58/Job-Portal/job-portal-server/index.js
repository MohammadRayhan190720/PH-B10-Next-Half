require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ybate.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

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

    const jobsCollection = client.db("jobPortal").collection("jobs");
    const jobApplicationCollection = client
      .db("jobPortal")
      .collection("job_applications");

    //job related apis

    app.get("/jobs", async (req, res) => {

      //for my posted jobs
      const email = req.query.email;
      let query = {};
      if(email){
        query ={ hr_email: email }
      }


      const cursor = jobsCollection.find(query);
      const result = await cursor.toArray();

      res.send(result);
    });

    //load single job data

    app.get("/jobs/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await jobsCollection.findOne(query);

      res.send(result);
    });

    //post a job
    app.post("/jobs", async (req, res) => {
      const newJob = req.body;
      const result = await jobsCollection.insertOne(newJob);
      res.send(result);
    });

    //job-applications apis
    //get all data/ get one data// get some data

    app.get("/job-applications", async (req, res) => {
      const email = req.query.email;
      const query = { applicant_email: email };
      const result = await jobApplicationCollection.find(query).toArray();

      //fokira way to aggregate data
      for (const application of result) {
        console.log(application.job_id);
        const query = { _id: new ObjectId(application.job_id) };
        const job = await jobsCollection.findOne(query);

        if (job) {
          application.title = job.title;
          application.company = job.company;
          application.company_logo = job.company_logo;
          application.location = job.location;
        }
      }

      res.send(result);
    });

    app.get("/job-applications/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await jobApplicationCollection.findOne(query);
      res.send(result);
    });

    app.post("/job-applications", async (req, res) => {
      const application = req.body;
      const result = await jobApplicationCollection.insertOne(application);

      res.send(result);
    });

    app.delete("/job-applications/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await jobApplicationCollection.deleteOne(query);
      res.send(result);
    });

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
  res.send("Job Portal server is Running");
});

app.listen(port, () => {
  console.log(`Job Portal is Running on ${port}`);
});
