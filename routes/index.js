var express = require('express');
var router = express.Router();
const UserController = require('../controllers/UserController')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/teste', UserController.agregadoras)

module.exports = router;
