const { createClient } = require('redis');
const redisClient = createClient();

redisClient.connect().then(() => {
    console.log('Redis connected');
});

module.exports = redisClient;
