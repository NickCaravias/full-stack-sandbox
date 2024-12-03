const express = require("express");
const router = express.Router()

const questionsController = require('../controllers/apis/questionsController')

router.post('/create', questionsController.createQuestion);
router.get('/index', questionsController.indexQuestions);

module.exports = router;