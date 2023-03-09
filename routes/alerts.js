// imports from libs
const express = require("express");
const { body } = require("express-validator");
const alertsController = require("../controllers/alert");


const router = express.Router();


router.get("/get-all", alertsController.getAllAlerts);
router.get("/:id", alertsController.getAlertById);
router.post("/create-alert", alertsController.postCreateAlert);

module.exports = router;
