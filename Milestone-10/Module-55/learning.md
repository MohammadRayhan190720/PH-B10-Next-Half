## Recap - Create Read And Delete Rivision
- step by step
----
1. MongoDB Connection
--------
- creat account
- creat an user with password
- whitelist IP address
- database > connect > friver > Node > View full code
- change the password the uri
----------
2. Create --- POST

-----------
--server side
- app.post("/users",(req,res)=>{})
- Google - node mongodb crud
- make  function async to use await inside it
- make sure you use the express.json() middleware
- access data from the body : const user = req.body
- const result = await userCollection.insertOne(user);
- res.send(result);

--client side

- create fetch
- add second parameter as an object
- provide method : "POST"
- add headers : "Content-type": "application/json"
- add body : JSON.stringify(user)
---------

## READ - many

--------
1. Create a cursor => userCollection.find()
2. const result = await cursor.toArray();

--------
## DELETE
--------
--server side
1. create app.delete('/users/:id',async(req,res)=>{})
2. specify uniqe ObjectId to delete the right user
3. const query = { _id : new ObjectId(id)}
4. const result = await userCollection.deleteOne(query);


-client side
1. creat dynamic URL with id
2. make sure metion the delete method