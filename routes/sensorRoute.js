const express = require('express');
const router = express.Router();
const sensorController = require('../controllers/sensorController');

router.post('/sensor',  sensorController.createSensor),
router.get('/sensor',  sensorController.getSensor),

module.exports = router;