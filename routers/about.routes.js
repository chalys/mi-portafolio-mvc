const express = require('express');
const router = express.Router();
const otherControllers = require('../controllers/other');

router.get("/", otherControllers.about);

module.exports = router;

