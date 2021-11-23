// What is express
- Web development framework
- allows us to spin up servers easily
- methods and add ons we can use to build web apps, apis, etc
- It's okay to reference old code and things we did before!
- What does it do?
   → Start up a server to listen for requests
   → parse incoming requests
   → match them to particular routes
   → craft the http response and associated content
- what is a framework?
   → Library
      ⇒ We control the flow of the application and when to use it
   → Framework
      ⇒ Control is inverted
      ⇒ We must mold ourselves into the framework
- Some useful things it does
   → Automatically will send a 404 response if there is a page not found
- Setting up basic Express

- Install with npm
   → npm install express
- Set up basic code
    const express = require('express');
    const app = express();
    require('dotenv').config()

    // Anytime a request comes in, this will be used
    app.use((req, res)=>{
        res.send("We got a new request")
    })

    app.listen(process.env.PORT, function(){
        console.log(`Server is online on port ${process.env.PORT}`)
    })

- Request and Response objects
   → Each time a request comes in we have access to an object we can do something with
   → Sending a response - Express will automatically send the correct type of content header depending on the content. Strings will go as text/html. Objects will go as application/json

res.send({color:'red', name:'Bablet'})
res.send('<h1>This is a tag</h1>')
- Routing Basics
   → Taking incoming requests and matching them to a path
   → Path could be anything:  /cats, /scheduling
   → we will us app.get() to match paths

// Put more specific routes first
app.get('/cats', (req,res) => {
    res.send("<h1>Cats!</h1>")
})

app.post('/cats', (req,res) => {
    res.send("Hit the cats post route!")
})

// Put generic routes after
app.get('/', (req,res) => {
    res.send("<h1>Home!!</h1>")
})

// Put this at the end to catch all paths
app.get('*', (req,res) => {
    res.send("Unknown path - hit the I cant find something route")
})

- Defining patterns in express
   → We do this if there is a template page that we want to change content on - such as a subreddit forum.
   → /r/:somethingname
   → We use a colon that designates something as a path variable
   → We have access to what the user requested in request.params
      ⇒ this gives us an object with the name of the variable we defined and its value

// Defining patterns
app.get('/r/:subreddit', (req,res) => {
    console.log(req.params)
    res.send(`This is the ${req.params.subreddit} subreddit`)
})
Server is online on port 8080
{ subreddit: 'casfafds' }
{ subreddit: 'fgsgfdgfds' }


app.get('/r/:subreddit/:postId', (req,res) => {
    const {subreddit, postId} = req.params;
    res.send(`Viewing post ID ${postId} on the ${subreddit} subreddit`)
})

// Working with Query strings
- We can access this on the request object
- req.query will give us an object

localhost:8080/search?question=cats

app.get('/search', (req,res) => {
    if (!req.query.question) {
        res.send("Nothing was searched")
    } else { 
        console.log(req.query)
        res.send(`${req.query.question}`)
    }
})


