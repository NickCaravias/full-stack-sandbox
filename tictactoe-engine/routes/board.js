const express = require("express");
const router = express.Router();

const boardController = require("../controllers/apis/board");

router.get('/cleanBoard', boardController.getNewChessBoard)

module.exports = router;