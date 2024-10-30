require('dotenv').config();
const express = require('express');
const weatherRouter = require('./routes/weatherRoute');
const rateLimit = require('express-rate-limit');
const { initializeRedis } = require('./config/redisClient');

const app = express();


// rate limiting configuration
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 500,
    standardHeaders: 'draft-7',
    legacyHeaders: false,
})

app.use(limiter);

app.use('/weather', weatherRouter);

app.get('/', (req, res) => {
    res.send('test');
})

initializeRedis().then(() => {
    app.listen(process.env.PORT, () => {
        console.log("listening on: ", process.env.PORT);
    })
})


