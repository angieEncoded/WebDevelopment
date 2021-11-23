const express = require('express');
const app = express();
require('dotenv').config()


app.get('/search', (req,res) => {
    if (!req.query.question) {
        res.send("Nothing was searched")
    } else { 
        console.log(req.query)
        res.send(`${req.query.question}`)
    }
})



app.listen(process.env.PORT, () => {
    console.log(`App online on port ${process.env.PORT}`)
})