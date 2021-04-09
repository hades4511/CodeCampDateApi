const express = require('express');

const dateController = require('../controllers/date');

const router = express.Router();

// http://expressjs.com/en/starter/basic-routing.html
router.get('/:date_string', dateController.specificDate);
router.get('/', dateController.currentDate);

module.exports = router;