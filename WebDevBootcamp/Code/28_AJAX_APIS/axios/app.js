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