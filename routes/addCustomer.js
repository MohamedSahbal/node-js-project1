const express = require('express')
const router = express.Router()
const customerController=require("../controllers/customerController")

router.get("", customerController.user_add_get);
// POST Request
router.post("", customerController.user_post);

module.exports = router
