const express = require('express');

const path = require('path');
const rootDir = require('../util/path');

const router = express.Router();

router.get("/", (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'index.html'));
});
  
  
// your first API endpoint... 
// router.get("/api/hello", function (req, res) {
//     res.json({greeting: 'hello API'});
// });

module.exports = router;