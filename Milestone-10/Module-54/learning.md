## Milestone-10 : Backend and Database Integration

## Module-54 : Geting started with node.js,express js and API

### Module Introduction and What is Server?
- What is Server?

 ``` A server is a computer system, software, or device that provides services, data, or resources to other computers, known as clients, over a network. Servers play a fundamental role in networking, enabling communication, data exchange, and hosting of applications and websites.```

- What elemnt build a server?
 ``` A server consists of several key elements that work together to process requests, store data, and deliver responses to clients. These elements can be categorized into hardware components, software components, and networking features```
- who operates the server?
  - an operating system operate a server for 24/7.Beaucse when it off ,its unable to serve anything

- example of server
  Web browser => internet => web servers
- What is formal defination io server?
  - A Server is a coumputer program or device that privides a service to another coumputer program and its user also known as the client.

- what is the purpose of server?
 - The role of a server is to share data as well as well as to share resources and distribute work

- Different types of server?
 - Web server => Hosting and serving websites to clients over the internet
 - File server => Sharing and storing files over a network
 - Application server => Hoisting and runing applications for many users to access remotely.
 - Databse server => Storing,managing and serving databases to multiple clients

- Is server and databse is same?
 - no. server is a computer program that runs to provide services .Database is lerge collection of data

- Relation between client ,server and databse?

---------

## client and server connection with request and response..
- How does api connect client and server?

- Rest API=> Get,post,put/patch,delete method => CRUD Operation
  -get => ডাটা আনবে
  -post => ডাটা রাখবে
  -put=> ডাটাবেস এর ডাটা আপডেট করবে
  -delete=> ডাটাবেস এর ডাঁটা রিমুভ করবে
- Rest Respons => JSON FOrmat

- How POST API connect client and server?
 ```Javascript

    Const coffeData = {
      name,taste,category,details,image,price
    }

    fetch(`http://localhost:5000/coffee`,{
      method: 'POST',
      headers:{
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(coffeData),
    })
    .then(res => res.json())
    .then(data => console.log(data))
    })
   ```


- Request and Reponse model
 - request => Methods, resources,headers,content
 - the request object represents the HTTP request and has properties
  - request query string
  - paremeters
  - body
  - HTTP headers and so on
   - req.body => Contains Key-value pairs of data submitted in the request body
   
   -req.params => THis property is an object containing properties mapped to the names route parameters .For example,If you have the route /user/:name the the name property is available as req.params.name.THis object defaults to {} console.log(req.params.name)

   - req.query=> This property is an object containing a property for each query string parameter in the route.When query parser is set to disabled,it is an empty object,otherwuse it is the reqult of the cinfigured query parser

 - reponse => Status code,header,content
  - The res object represents the HTTP response that an Express app sends when it gets an HTTP request and an Express app sends when it gets an HTTP request and has methods
   - res.send()
   - res.json()
   - res.status(),res.sendStatus()
   - res.set() and so on


-----------

## Node js and other Languages.How does Node js work?
- node js is a server side javascript runtime
- javascript laibrary
- not a programming language
-- Node JS-
- Open source
- very fast
- no buffering
- asynchronous
- cross platform
- JS Runtime environment
- Allows server side scripting
- single threaded,non-bolcking highly scalable
- Capable of asynchronous I/O(input/output)
- Has event-driven architrcture

- JS code may be executed in one of two runtime environments
 - A browsers runtime environment
 - THe Node runtime environment

### When To use node js?
- Api Application - A great choice for constructing an API application with both relational and non-relational databse
- its all because
 - Node js runs on a single thread which makes it easyer to handle up to 10,000 concurrent requests
 - all blocking I/O tasks are always being processed asynchronously by internal threads without interuoting the main thread
 - this makes node js good to handle the requests,make databse iperation and expose JSON object for clients
 - good to building real-time applications like
  - messageing 
  - notifications delivary
  - line streming 
  - collaboration tools


--------

## What is Node js and express js and why use them?
- javascript => crome ar upore build kora => Node Js=> javascript ar upore build kora

### What is Express js and why should you learn express js?
- Express is a node js web application framework that provides broad fetures for building web and mobile applications
- It is used to build a single page,multipage,and hybrid web application
- Its a layer build on the top of the nodejs that helps manage servers and routes
------
- What is Express JS Middleware?
 - Middleware in Express are functions that come into play after the server receives the request and before the response is sent to the client
 - they are arranges in a chain and are called in sequence
 - We can use middleware functions for different types of processing tasks requires for fulfilling the request
  - database querying
  - making API calls
  - preparing the response
  - and finally calling the next miffleware function in the chain
  - We call app.use() to add a middleware function to our Express application

  ----------------------------

  ## What is Database ,DBMS,mongoDB, NoSQL vs SQL
  - What is Database?
   - Databse can be considered as a container filled with data which is electronically stored in a computer system
   
  - SQL Database
   - SQL(Structured Query Language) is the standard for dealing with Relation Database
   - SQL Databse or relational databse as a collection of highly structured tables
   - each row reflects a data entity and every column defines a specific information field

  -NoSQL Database
   - NoSQL Database are non-labular databses and store sata differently than relational tables 
   - it avoides joins and is easy to scale
   - The major purpose of useing a NoSQL databse is for distribute data stores with humongous data storage needs

   ### MongoDB
   - MongoDB is an open-source ,cross platform,distributed document database
   - MongoDB is Developed by MongoDB inc and categorized as a NoSQL database
   - MongoDB is not a Ralational databseManagement System
   - It is oppisite to SQL based databases where it does not normalize data under schemas and tables where every table has a fixed structure
   - It stores data in the collections as JSON based documents and does not enforce schemas.It does not have tables ,rows and columns as other SQL (RDBMS) databases
  
### Advantages of MOngoDB
 - MongoDB stores data as JSON based document that does not enforce the schema.It allows us to store hierarchical data in a document.This makes it easy to store and retrieve data in an efficient manner
 - It is easy to scale up or down as per requerment since it is a document based databse.MongoDB also allows us to split data across multiple servers
 - MongoBD provides rich features like indexing,aggregation,file store ect.
 - MongoDB performs fast  with huge data
------
