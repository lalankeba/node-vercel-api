const express = require('express');
const { init } = require('../controllers/home-controller');

const router = express.Router();

router.get('/', init);
router.get('/home', init);

module.exports = router;