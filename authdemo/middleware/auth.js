const userCheck = {}

userCheck.requireLogin = (req, res, next) => {
    if (!req.session.isLoggedIn) {
        req.flash("error", "You need to be logged in to do that.")
        return res.redirect("/login")
    }
    next();
}

module.exports = userCheck;