const express = require('express');
const router = express.Router();

/* GET about page */
router.get('/', function (req, res, next) {
    res.render('portfolio', { title: 'Erik V Gratz' });
});

module.exports = router;