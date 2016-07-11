var express = require('express');
var router = express.Router();

/* GET candies listing. */
router.get('/candies', (req, res) => {
    res.status(200).json({results: ['candies1', 'candies2', 'candies3', 'candies4']})
})

module.exports = router;
