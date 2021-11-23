const figlet = require('figlet');
const colors = require('colors')

figlet('Bablet Rules', function(error, data){
    if (error){
        console.log(error);
        return;
    }
    console.log(data.rainbow)
})

figlet('Rory Drools', function(error, data){
    if (error){
        console.log(error);
        return;
    }
    console.log(data.green)
})
