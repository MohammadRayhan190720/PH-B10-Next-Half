require("dotenv").config();

const express = require("express");
const cors = require("cors");
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser')
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(
  cors({
    origin: [
      "http://localhost:5173", 
      "https://job-portal-bba5e.web.app",
      "https://job-portal-bba5e.firebaseapp.com"
     ],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

//custom midddleware

// const logger = (req,res,next) =>{
//   console.log('inside logger middlewqre')
//   next();
// }

const verifyToken = (req, res, next) =>{
  // console.log('inside verify token middlewqre',req.cookies)
  const token = req?.cookies?.token;

  if(!token){
    return res.status(401).send({message: 'Unauthorized access'})
  }
  jwt.verify(token, process.env.JWT_SECRET, (err,decode) =>{
    if(err){
      return res.status(401).send({message: 'Unauthorized access'})
    }

    req.user = decode;
    
     next();

  });
 
}

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
    // await client.connect();

    const jobsCollection = client.db("jobPortal").collection("jobs");
    const jobApplicationCollection = client
      .db("jobPortal")
      .collection("job_applications");

    //job related apis

    app.get("/jobs",  async (req, res) => {
      // console.log('inside jobs api')

      //for my posted jobs
      const email = req.query.email;
      //sort by salary
      const sort = req.query?.sort;
      //search by location
      const search = req.query?.search
      
      //filter by min and max
      const min = req.query?.min;
      const max = req.query?.max;

      let query = {};
      let sortQuery = {};


      if(email){
        query ={ hr_email: email }
      }

      if(sort == "true"){
        sortQuery = { "salaryRange.min": -1 };
      }

      if(search){
        query.location = { $regex: search, $options: "i"}
      }

      if(min && max){
        query = {
          ...query,
          "salaryRange.min":{ $gte: parseInt(min)},
          "salaryRange.max":{ $lte: parseInt(max)},
        }
      }

      const cursor = jobsCollection.find(query).sort(sortQuery);
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

    //auth related apis
    app.post('/jwt',  (req, res) => {
      const user = req.body;
      const token = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: "1h" });
      res
        .cookie("token", token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
        })
        .send({ sucess: true });
    })

    //logout
    app.post('/logout', (req,res) =>{
      res
        .clearCookie("token", {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
        })
        .send({ sucess: true });
    })




    //job-applications apis
    //get all data/ get one data// get some data

    app.get("/job-applications",verifyToken,  async (req, res) => {
      const email = req.query.email;
      const query = { applicant_email: email };

      if(req.user.email !== req.query.email){
        return res.status(403).send({message:'forbidden access'})
      }

      // console.log("cuk cuk cokies", req.cookies);
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

    app.get('/job-applications/jobs/:job_id', async(req, res) => {
             const jobId = req.params.job_id;
             const query = {job_id: jobId};
             const result = await jobApplicationCollection.find(query).toArray();

             res.send(result);
    })

    app.post("/job-applications", async (req, res) => {
      const application = req.body;
      const result = await jobApplicationCollection.insertOne(application);

      //not the best way => use aggregation => for applicant count
      const id = application.job_id;
      const query = {_id: new ObjectId(id)}
      const job = await jobApplicationCollection.findOne(query)
      console.log(job)

      //applicant count
      let newCount = 0;
      if(job?.applicationCount){
        newCount = job.applicationCount + 1;
      }else{
        newCount = 1;
      }

      //now update the job info

      const filter = {_id: new ObjectId(id)}
      const updatedDoc = {
        $set:{
          applicationCount: newCount,
        }
      }
      const updatedResult = await jobApplicationCollection.updateOne(filter,updatedDoc)

      res.send(result);
    });

    app.patch("/job-applications/:id", async(req,res) =>{
      const id = req.params.id;
      const data = req.body;
      const filter = {_id: new ObjectId(id)}
      const updatedDoc = {
        $set:{
          status: data.status,
        }
      }

      const result = await jobApplicationCollection.updateOne(filter, updatedDoc)
      res.send(result)
    })

    app.delete("/job-applications/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await jobApplicationCollection.deleteOne(query);
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
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
