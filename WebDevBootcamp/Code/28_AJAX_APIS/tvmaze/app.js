// TV shows images example

// Select the item from the DOM
const form = document.querySelector('#searchForm');

// Do something when we submit the form
form.addEventListener('submit', async function (e) {
    e.preventDefault(); // turn off the form's normal post routine

    // Get the search text from the input
    const searchTerm = form.elements.query.value;

    // set up an object that passes in params
    const config = {
        params: {
            q: searchTerm
        }, headers: {
            Accept: 'application/json'
        }
    }

    // Send the request and await the response
    try {
        // Get rid of any existing images
        clearImages();
        const response = await axios.get(`http://api.tvmaze.com/search/shows`, config)
        makeImages(response.data)
    } catch (error) {
        console.log(error);
    }
})

// This will show all the images that we have
const makeImages = (shows) => {
    for (let item of shows) {
        if (item.show.image) {
            const img = document.createElement('IMG');
            img.src = item.show.image.medium;
            document.body.append(img)
        }
    }
}

// This will clear all the images from the page upon a new search
const clearImages = () => {
    const images = document.querySelectorAll('img');
    if (images && images.length)
        for (let item of images) {
            console.log("removing images")
            item.remove();
        }
}