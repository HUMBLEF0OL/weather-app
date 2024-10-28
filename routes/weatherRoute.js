const express = require('express');
const router = express.Router();
const { getWeatherData, genericFunction } = require('../controller/weatherController');

router.get('/:city', getWeatherData);

router.get('/', genericFunction)

module.exports = router;