const express = require('express');
const router = express.Router();
const otherControllers = require('../controllers/other/index');

router.get("/", otherControllers.about);

module.exports = router;

