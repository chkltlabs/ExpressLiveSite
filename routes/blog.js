const express = require('express');
const router = express.Router();

/* GET about page */
router.get('/', function (req, res, next) {
    res.render('blog', {});
});

module.exports = router;