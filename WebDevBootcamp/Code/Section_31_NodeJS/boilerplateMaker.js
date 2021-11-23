const fs = require('fs');
const args = process.argv.slice(2) || 'Default'

// Async version
    // fs.mkdir(`${args[0]}`, (error) => {
    //     if (error) throw error;
    // });

// Sync version
try{
    fs.mkdirSync(`${args[0]}`)
    fs.writeFileSync(`${args[0]}/index.html`, '')
    fs.writeFileSync(`${args[0]}/app.js`, '')
    fs.writeFileSync(`${args[0]}/styles.css`, '')
} catch (error) {
    console.log(error)
}

// This will create a folder with three files in it
// use node boilerplateMaker.js NameOfFolder