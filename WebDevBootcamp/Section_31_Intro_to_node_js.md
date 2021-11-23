## What is node?
- Javascript run-time that runs on the back end
- Created in 2009 by Ryan Dahl
- Increasing in popularity

## What do we use it for?
- Creating web servers
- Server-side logic for websites
- Command line tools
- Native apps
- Video games
- Drone software
- etc
- Who uses it?
   - Netflix, NASA, lots of places now
- VSCode is also written in NodeJS
- Slack 
- discord
- Electron is the underlying framework for this

## Installing NodeJS
- Check if it exists
   - type 'node' in a terminal
   - Press CTRL + C twice to exit
- Download from the website nodejs.org

## The Node REPL
- Read Evaluate Print Loop
- Continually listens and waits for more input
- Useful for testing new features
- Understands javascript
- typing '.help' will give a list of some commands
- No DOM stuff - No access to the window object or the DOM object
- we DO have access to the global object
   - setTimeout() works here
   - Top-level bubble when we are using NodeJS

## Running a node script
- create a file - firstScript.js
   ```js 
      for(let i = 0; i < 10; i++){
         console.log("Hello from the script");
      } 
    ```
- node file.js

## Process and argv
- Process
   - Global scope 
   - control over the current node process
   - read and write to console
   - memory usage
   - current working director
   - environment variables
   - Examples
      - process.version
      - process.release
      - process.env //Env variables
      - process.cwd() // path to where I am working
      - process.argv
         - Returns an array that has the command line arguments passed when the nodejs process was launched
         - First element is process.execPath
         - We can pass arguments into the process to use in the script
         - Useful to enter a debugging mode
         - To get the args excluding the first to 'gimme' elements
            - process.argv.slice(2);
            - Note that it puts each space delimited item into a string in the array

## File system module
- it's a module that lets us create files, delete files, open and close files, etc
- all file system operations have synchronous and async forms
- errors that happen on synchronous operations need to be wrapped in a try\catch block
- We can throw the error in the callback for the async version
- Some examples
   - fs.mkdir()
      ```js   
         fs.mkdir(`${args[0]}`, (error) => {
             if (error) throw error;
        }); ```
   - fs.mkdirSync()
        