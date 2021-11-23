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