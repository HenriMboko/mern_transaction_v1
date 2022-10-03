var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/transaction', (req, res, next) => {
  res.json({ message: "Sucess" })
})

module.exports = router;
