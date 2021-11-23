# AJAX and APIs

- Intro to AJAX
    - Making Requests
        - We use AJAX for this
            - Asynchronous Javascript And XML
        - This is what makes things like scrolling and loading on reddit work
        - We make a request with AJAX and get back HTML, CSS, and JS
    - If we wanted to make a page that autorefreshes:
        - We can set a timer in JS
        - JS will make the request to an API
        - The API would respond with the JSON data
        - We can then use it in our page
- Intro to APIs
    - API is Application Programming Interface
    - Basically one piece of software talking to another
    - When we talk about APIs it's mostly Web APIs
        - Endpoints are exposed that we can request things from over http
        - USusally they respond with JSON
        - We use this so we only get the data back instead of a whole html page
    - twilio
        - An example of a major API endpoint that can do a LOT of things
        - it has payment tiers so most of the really good stuff requires a subscription
        - it can be programmed to send sms, phone calls, text, etc
- JSON
    - APIs used to respond with XML back in the day
    - This was clunky to work with, so JSON was developed
    - It stands for Javascript Object Notation
        - Uses key\value pairs
        - Strings must be enclosed in double quotes
            - Things like numbers and booleans are value without stringifying them
            - undefined is not valid - must use null
                - any json validator will automatically quote undefined and treat it as a string
    - JSON is widely used. It's not just for use with javascript
    ```js 
    JSON.parse()
    ```
    - This will turn a json string into an object we can use in the code
    ```js
    JSON.stringify()
    ```
    - This will turn a json object into a string we can send back as our response
    - it will add double quotes as needed
- Using Postman
    - All requests also have things we can't see from the response - headers, status codes, etc
    - Postman is useful for creating APIS and testing 
    - Core pieces of an http response:
        - Body
            - this is the data. The content of the response
        - Status Code
            - This is the server letting us know how it went
                - 2xx - Generally good responses
                - 3xx - Server redirection
                - 4xx - Errors, client did something wrong
                - 5xx - Errors, server has some failure
        - Headers 
            - Details of what is contained in the response
                - Content types
                    - text/html
                    - application/json
- Query Strings and Headers
    - If you see :something in api documentation, that indicates some variable value that we (the user) provides
    - For example ?q=:searchParameter
        - this is a query string on the end of a url
        - format is usually like this:
        - ```http://api.com?q=searchItem```
        - many APIs require us to use this query string format
    - Add additional parameters by separating them with an ampersand
        - ```http://api.com?this=something&that=somethingElse```
    - Postman allows us to type in parameters separately instead of building out the querystring by hand
    - Some APIs also require us to add headers
- Making XHRs
    - XMLHttpRequest
        - Original way
        - Does not support promises
        - So... we have to use callbacks
        - Odd capitalization
        - Clunky syntax
    - Format
        - create a new object
        - create the onload callback function
        - create the onerror callback function
        - open the request with the method, then the url
        - send the request
        - then the object comes back we have to parse for the data we want
    - We do not use this anymore
- Fetch API
    - Newer way of making http requests
    - Supports promises and async\await
        - Be aware this is not supported in IE
    - Syntax
        - ```fetch('url')```
            - that's it. 
            - We can chain .then() and .catch() to deal with the data and errors
            - We can use async\await as well
    - Nuances
        - fetch does not wait until all the data is back before resolving the promise. As soon as the headers come back, its done
        - We have to 'stop' it in the code in order to capture the data
        - Basically we need two .then() for each fetch.
        - one captures the completed promise
        - we wait for the data inside that .then() and pass it to the next .then() for processing.
            ```js
            // Example Fetch Request
            fetch("https://api.cryptonator.com/api/ticker/btc-usd")
                .then(res => {
                    // we don't have the data here!
                    return res.json(); // We have to force the code to wait for the full data
                })
                .then(data => { // now we have the data
                    console.log("=========Promise Version========")
                    console.log(data)
                })
                .catch(error => {
                    console.log(error)
                })

            // Async way
            const fetchPrice = async () => {
                try {
                    const response = await fetch("https://api.cryptonator.com/api/ticker/btc-usd")
                    const data = await response.json(); // We still need to await the data
                    console.log("=========Async\\Await Version========")
                    console.log(data)
                } catch (error) {
                    console.log("======Hit an error======")
                    console.log(error);
                }

            }
            fetchPrice();
            ```
    - Fetch is not ideal, but it is an improvement over XHRs.
    - Axios is built on top of fetch, which is what we use today.
- Intro to axios
    - Library for making requests
    - built on fetch
    - much easier to use for requests than raw fetch
    - Basically compresses our responsibility into a single step
    - We do have to include this in either our web page or our back end node file
        - so either ``` npm install axios``` and then ```const axios = require('axios');```
        - or in the web page ```<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>```
        ```js
        axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
            .then(res => {
                console.log(res)
            })
            .catch(error => {
                console.log(error)
            })


        const getPrice = async () => {
            try {
                const response = await axios.get('https://api.cryptonator.com/api/ticker/btc-usd');
                console.log(response)
            } catch (error) {
                console.log(error)
            }
        }
        ```
    - Setting headers in axios
        - Some APIs require this in order to get you the data you want
        - they may default to an html response if we don't specify
        - You will need to look at the docs to determine if this is the case
            ```js 
            // setting headers in axios - some APIs will default to sending back html
            const getDadJoke = async () => {
                // axios takes a second argument in the form of an object where we can specify headers
                const config = {
                    headers: {
                        Accept: 'application/json'
                    }
                }
                const res = await axios.get('https://icanhazdadjoke.com/', config)
                const newLI = document.createElement
                console.log(res.data.joke)
            }

            getDadJoke();
            ```
        - APIs often have spam limits as well

## Full axios request sample - see axios folder for working code

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <title>axios</title>
</head>
<body>
    <h1>Click to get a new joke</h1>
    <button>Joke</button>
    <ul id="jokes"></ul>
    <script src="app.js"></script>
</body>
</html>
```

```js

const jokes = document.querySelector('#jokes');
const button = document.querySelector('button');

// Add the joke to the LI subroutine
const addNewJoke = async () => {
    try {
        const jokeText = await getDadJoke();
        const newLI = document.createElement("LI");
        newLI.append(jokeText);
        jokes.append(newLI);
    } catch (error) {
        console.log(error)
    }
}

// Get the joke subroutine
const getDadJoke = async () => {
    try {
        // axios takes a second argument in the form of an object where we can specify headers
        const config = {
            headers: {
                Accept: 'application/json'
            }
        }
        const res = await axios.get('https://icanhazdadjoke.com/', config);
        return res.data.joke;
    } catch (error) {
        return "JOKE API FAILURE"
    }
}



// Some light DOM manipulation - NOTE - do NOT execute this function in the event listener
// It will immediately execute once and then won't work at all
button.addEventListener('click', addNewJoke)
```
# Axios and csrf
- Using axios with csrf
    - Add the token as a meta tag in the template
    ```html
        <meta name="csrf" content="<%= token %>">
    ```
    - Read the tag in the front end javascript
    ```js
        const token = document.querySelector('meta[name="csrf"]').getAttribute('content');
    ```
    - Send it in the header
    ```js
        const config = {
            headers: {
                'CSRF-Token': token,
            },
            timeselection: tunnelTime,
        }
        axios.post('/tools/sonicwall', config)
        .then(result => {
            console.log(result)
        })
        .catch(error => {
            console.log(error);
        })

    ```
    - Be sure that you are ```res.send()``` something in the express app  
