const logger = require("../config/logger");

const getWeatherData = async (req, res) => {
    const city = req.params.city;
    logger.info(`get weather data for: ${city}`)

    if (!process.env.API_KEY) {
        return res.status(500).send('Internal server error');
    }
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=${process.env.API_KEY}&contentType=json`
    try {
        const response = await fetch(url);

        if (!response.ok) {
            logger.error(`Failed to fetch data: response status: ${response?.status}, response text: ${response?.statusText}`);
            return res.status(response.status).json({ message: 'Bad request', status: response.status });
        }

        let result;
        try {
            result = await response.json();
        } catch (parseError) {
            return res.status(500).json({ message: parseError?.statusText, status: 500 })
        }
        return res.type('application/json').json(result);
    } catch (err) {
        logger.error(`Operation Failed: ${err.message}`);
        return res.status(500).json({ message: 'Failed to fetch data', status: 500 });
    }
}

const genericFunction = (req, res) => {
    res.send('please provide valid city in the url');
}

module.exports = {
    getWeatherData,
    genericFunction
}

