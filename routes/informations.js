var express = require('express');
var router = express.Router();
const informationsCtrl = require('../controllers/informations');

/* GET users listing. */
router.get('/new', informationsCtrl.new);
router.post('/', informationsCtrl.create);
router.get('/', informationsCtrl.index);

module.exports = router;
