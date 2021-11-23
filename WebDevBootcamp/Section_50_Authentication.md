# Authentication from scratch

- Authentication
    - process of verifying who a particular user is
    - often done with a username and password
    - many other ways
- Authorization
    - What an authenticated user is allowed to do
    - Typically after someone has been authenticated
- How to store a password
    - We have to store a username
    - rule #1 is to never store passwords in plaintext
    - Instead hash the passwod
        - run it through a hashing function and store that value in the database
        - Then when we check it, we run the password the user typed in through the hashing function again
        - this is compared against what we have in the database
- Cryptographic hash functions
    - Broad group of functions
    - Don't all have to do with passwords
    - Hash tables\maps - may turn some input string into some fixed size output
- We want a hash function with the following characteristics
    - One-way function which is infeasible to invert - meaning someone can't reverse engineer the password based on the hash
    - Small change in the input yields large change in the output
        - A one digit change should end up with a large change in the resulting hash
    - Same input yields the same output (deterministic)
    - Unlikely to find 2 outputs with the same value
    - Password hash functions are deliberately slow
- Salts
    - This is an extra safeguard
    - Include a random value as we hash that password
    - That value is stored separately
    - This gives us a different output so attackers can't use a reverse lookup table of previously cracked passwords


## Bcrypt
- bcrypt vs bcryptjs
    - bcryptjs can run in the browser
    - bcrypt built on top of c++ so it it slightly faster
    - both can be used as the nodejs back end


## include the module 
```js
const bcrypt = require("bcrypt");
```

## set up a function that takes in a password, generates the salt and the hash
```js
const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(14)
    const hash = await bcrypt.hash(password, salt);
    console.log(hash)
}
```

## Hash the password (We would get this in from the user)
```js
hashPassword('monkey');
// This happened to hash to this value
const savedHash = "$2b$14$4MIKzaL/.2UNvJxGPO2Loemldv7Nty5Ux1uSBlbAiX/lDZ9JnV4I6"
```

## Set up a function to compare the password that the user provided to the password stored in the database
```js
const login = async (password, hashedPassword) => {
    const result = await bcrypt.compare(password, hashedPassword);
    if (result) {
        return console.log("Success")
    }
    console.log("fail")
}

login('monkey', savedHash) // This works
login('monkeys', savedHash) // This fails
```

## Simpler way to do it all at once with bcrypt

```js
const simpleHashPassword = async (password) => {
    const hash = await bcrypt.hash(password, 12)
    console.log(hash);
}
```