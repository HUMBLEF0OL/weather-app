const fetchWeatherData = (req, res) => {
    console.log("inside controller");
    res.send('weather controller');
}

module.exports = {
    fetchWeatherData
}