const express = require('express');
const router = express.Router();
const controllers = require('../controllers');
 

//this is a route
router.get('/', controllers.hellWorld);

router.get('/wife', controllers.wifeFunction);

module.exports = router;