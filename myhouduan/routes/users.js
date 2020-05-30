var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/addPage', function(req, res, next) {
  res.render('addPage');
});

module.exports = router;
