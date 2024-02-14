const express = require('express');
const router = express.Router();
const otherControllers = require('../controllers/other/index');

router.get("/", otherControllers.main);
router.get("/home",(req,res) => res.redirect("/"));

module.exports = router;