var express = require('express');
var router = express.Router();
var bingoCard = require('../modules/generate.array.bingo');

router.get('/', function(req, res, next) {
    const cartelas = [bingoCard.arrayBingo(), bingoCard.arrayBingo(), bingoCard.arrayBingo()]
    res.send(cartelas);
});

function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) { return next(); }
    res.redirect('/auth/login')
}

module.exports = router;