const express = require('express');
const router = express.Router();
const irineuController = require('../controllers/controllers');
 

//this is a route
router.get('/', irineuController.irineuFunction);

router.get('/wife', irineuController.wifeFunction);

module.exports = router;