const { redisClient } = require("../config/redis");

const WINDOW_SIZE = 60; //seconds
const MAX_REQUESTS = 20;

async function rateLimiter(req, res, next) {
  try {
    const ip = req.ip;
    const key = `rate:${ip}`;
    const requestCount = await redisClient.get(key);

    if (requestCount && Number(requestCount) >= MAX_REQUESTS) {
      return res.status(429).json({
        error: " Too many requests, Try again later.",
      });
    }
    if (!requestCount) {
      await redisClient.set(key, 1, { EX: WINDOW_SIZE });
    } else {
      await redisClient.incr(key);
    }

    next();
  } catch (err) {
    console.log("Rate Limiter Error:", err);
    next();
  }
}

module.exports = rateLimiter;
