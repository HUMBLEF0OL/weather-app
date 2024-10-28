const winston = require('winston');
const { combine, timestamp, cli, printf, colorize } = winston.format;

const logger = winston.createLogger({
    level: 'info',
    format: combine(
        colorize(), // Adds colors without overriding the timestamp
        timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), // Adds a readable timestamp
        printf(({ timestamp, level, message }) => `${timestamp} [${level}]: ${message}`)
    ),
    transports: [new winston.transports.Console()]
});

module.exports = logger;
