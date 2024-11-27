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


## Node js and other Languages.How does Node js work?