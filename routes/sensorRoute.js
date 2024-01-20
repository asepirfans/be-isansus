const express = require('express');
const router = express.Router();
const sensorController = require('../controllers/sensorController');
const wifiController = require('../controllers/wifiController');

router.post('/sensor',  sensorController.createSensor),
router.get('/sensor',  sensorController.getSensor),

router.post('/wifi', wifiController.createWifi),
router.get('/wifi', wifiController.getWifi),

module.exports = router;