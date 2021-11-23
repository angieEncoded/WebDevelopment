const express = require('express');
const app = express();
require('dotenv').config()



// Defining patterns
app.get('/r/:subreddit', (req,res) => {
    console.log(req.params)
    res.send(`This is the ${req.params.subreddit} subreddit`)
})

app.get('/r/:subreddit/:postId', (req,res) => {
    const {subreddit, postId} = req.params;
    res.send(`Viewing post ID ${postId} on the ${subreddit} subreddit`)
})



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

// Anytime a request comes in, this will be used. This matches EVERY request. Wouldn't use this really.
app.use((req, res)=>{
    res.send({color:'red', name:'Bablet'})
})

app.listen(process.env.PORT, function(){
    console.log(`Server is online on port ${process.env.PORT}`)
})