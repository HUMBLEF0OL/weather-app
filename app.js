require('dotenv').config();
const express = require('express');
const weatherRouter = require('./routes/weatherRoute');

const app = express();

app.use('/weather', weatherRouter);

app.get('/', (req, res) => {
    res.send('test');
})

app.listen(process.env.PORT, () => {
    console.log("listening on: ", process.env.PORT);
})

// `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/dehli?unitGroup=metric&key=ZGY6G56GVY98PYFBHZNKYGKZL&contentType=json`