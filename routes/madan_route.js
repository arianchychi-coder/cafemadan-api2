const express = require("express")
const madanController = require("../controllers/madan_controller")
const router = express.Router()
router.get('/',madanController.getAll)
router.post('/',madanController.addInfo)
module.exports = router