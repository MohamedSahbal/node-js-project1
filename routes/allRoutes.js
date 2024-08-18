const express = require('express')
const router = express.Router()
const User = require("../models/customerSchema")
var moment = require('moment');
const customerController=require("../controllers/customerController")

//Get Request
router.get("/", customerController.user_index_get);

router.get("/edit/:id", customerController.user_edit_get);

router.get("/view/:id", customerController.user_view_get);

router.post("/search", customerController.user_search_post);

// DELETE Request
router.delete("/edit/:id", customerController.user_delete);

// PUT Requst
router.put("/edit/:id", customerController.user_put);
module.exports = router
