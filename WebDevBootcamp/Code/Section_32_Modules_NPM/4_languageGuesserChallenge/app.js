const franc = require('franc');
const langs = require ('langs');
const spanish = require('random-spanish-words')
const english = require('random-words')
const colors = require('colors')
const args = process.argv.slice(2);

// Generate random spanish words and get the results
const spanishPhrase = spanish(20).join(' ');
const spanishResults = franc(spanishPhrase)
console.log(spanishPhrase.rainbow)
console.log(spanishResults.rainbow)
console.log(langs.where('3', spanishResults).name.bgBlue)

// Generate random english words and get the result
const englishPhrase = english(20).join(' ');
const englishResults = franc(englishPhrase)
console.log(englishPhrase.rainbow)
console.log(englishResults.rainbow)
console.log(langs.where('3', englishResults).name.bgGreen)

// Accept a phrase and parse it
const phrase = args[0];
const onTheFlyResults = franc(phrase);
console.log(phrase.rainbow)
console.log(onTheFlyResults.rainbow)
console.log(langs.where('3', onTheFlyResults).name.bgMagenta)