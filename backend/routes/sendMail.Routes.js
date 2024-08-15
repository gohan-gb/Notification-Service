const express = require('express')

const router = express.Router()

const emailContent = require('../controller/emailContent.Controller');

router.post("/emailContent", emailContent)

module.exports = router;