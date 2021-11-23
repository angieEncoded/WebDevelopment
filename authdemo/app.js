require("dotenv").config();
const express = require("express");
const app = express();
const engine = require("ejs-mate");
const morgan = require("morgan");
const path = require("path");
const session = require("express-session");
const methodOverride = require("method-override")
const sequelize = require('./database');
const flash = require("connect-flash");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const User = require("./models/User");
const bcrypt = require("bcrypt");
const userCheck = require("./middleware/auth")

// General use
app.engine("ejs", engine);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(morgan('tiny'))
app.use(flash());

// Set up the session middleware
app.use(session({
    secret: process.env.SECRET,
    store: new SequelizeStore({
        db: sequelize,
        clearExpired: true,
        checkExpirationInterval: 15 * 60 * 1000,
        expiration: 24 * 60 * 60 * 1000,
    }),
    resave: false,
    saveUninitialized: false,
}));

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")))

// Local things 
app.use(function (req, res, next) {
    res.locals.currentUser = { username: "Josie", discordName: "@whatever" };
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    res.locals.warning = req.flash("warning");
    next();
});





app.get("/", (req, res, next) => {
    res.render("home");
})

// ----------------------------- Signing up
app.get("/register", (req, res, next) => {
    res.render("register");
})

// create the user
app.post("/register", async (req, res, next) => {

    const { signup } = req.body;

    // Basic check that the password matches just in case they got past the front end validation
    if (signup.pass1 !== signup.pass2) {
        req.flash("error", "Those passwords don't match.")
        return res.redirect("/register")
    }

    try {
        const hashedPassword = await bcrypt.hash(signup.pass2, 12);
        const user = await User.create({
            username: signup.username,
            password: hashedPassword,
            addedBy: res.locals.currentUser.username
        })
        req.flash("success", "Registration successful.")
        res.redirect("/")
    } catch (error) {
        req.flash("error", error.message)
        res.redirect("/register")
    }
})
// -------------------------------Signing up

app.get("/login", (req, res, next) => {
    res.render("login")
})

app.post("/login", async (req, res, next) => {

    const { login } = req.body;
    try {
        // find the user by username
        const results = await User.findOne({
            where: {
                username: login.username
            }
        })
        const valid = await bcrypt.compare(login.password, results.password);

        if (valid) {
            req.session.username = results.username;
            req.session.isLoggedIn = true;
            req.flash("success", "Successfully logged in")
            return res.redirect("/secret")
        }

        req.flash("error", "Sorry, that didn't work. Please try again.")
        res.redirect("/login")
    } catch (e) {
        req.flash("error", error.message)
        res.redirect("/login")
    }

})

app.post("/logout", async (req, res, next) => {
    req.session.isLoggedIn = false;
    req.session.username = "";
    // alternatively destroy the session - but this breaks flash
    //req.session.destroy();

    req.flash("success", "Logged you out.")
    res.redirect("/")
})

app.get("/secret", userCheck.requireLogin, (req, res, next) => {
    res.render("secret")
})

app.all("*", (req, res, next) => {
    res.render("nopage");
})

// General use error route
app.use((err, req, res, next) => {
    // Handle the case where there is no error message
    if (!err.message) {
        err.message = "Unknown error occured";
    }
    console.log(err)
    // Handle if we somehow managed to get by all the validation
    if (err.message.includes("CONSTRAINT")) {
        err.message = "Database constraint violated";
    }

    const { status = 500, message = "Something went wrong" } = err;
    res.status(status).render("error", { error: err });
});

// Sync the database definitions
sequelize.sync({ alter: true })
    .then((results) => {
        app.listen(process.env.PORT, () => {
            console.log(`listening on port ${process.env.PORT}`);
        });
    })
    .catch(error => logger.log({ level: 'info', message: error.message }));
