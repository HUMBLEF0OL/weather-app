const express = require('express');
const router = express.Router();
const { fetchWeatherData } = require('../controller/weatherController');

router.get('/', fetchWeatherData);

module.exports = router;