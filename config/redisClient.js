// config/redisClient.js
const redis = require('redis');
const logger = require('./logger');

const client = redis.createClient({
    url: process.env.REDIS_URL || 'redis://localhost:6379'
});

client.on('error', (err) => {
    logger.error('Redis connection error:', err);
});

client.on('reconnecting', () => {
    logger.warn('Attempting to reconnect to Redis...');
});

client.on('ready', () => {
    logger.info('Redis connection is ready and stable.');
});

const initializeRedis = async () => {
    if (!client.isOpen) {
        try {
            await client.connect();
            logger.info('Redis Connected!');
        } catch (error) {
            logger.error('Failed to connect to Redis:', error);
            throw error;
        }
    }
};

// Export both client and initializer
module.exports = { client, initializeRedis };
