// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Celebrity = require("../models/Celebrity.model");

// all your routes here
router.get("/celebrities/create", (req, res, next) => {
    res.render("celebrities/new-celebrity")
});
router.post("/celebrities/create", (req, res, next) => {
    const { name, occupation, catchPhrase } = req.body; 
    Celebrity.create({ name, occupation, catchPhrase })
        .then(addedCelebrity => {
            console.log("Celebrity added to database: ", addedCelebrity);
            return res.redirect("/celebrities")
        })
        .catch(err => {
            console.log("Error found: ", err);
            return res.render("celebrities/new-celebrity")
        })
})
router.get("/celebrities", (req, res, next) => {
    Celebrity.find()
        .then(celebrities => {
            console.log(celebrities);
            res.render("celebrities/celebrities", {celebrities})
        })
})
module.exports = router;