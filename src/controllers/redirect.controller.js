const repo = require("../repositories/url.repository");
const { redisClient } = require("../config/redis");

async function redirect(req, res) {
  try {
    const { shortCode } = req.params;

    // 1️⃣ Check Redis
    const cachedUrl = await redisClient.get(shortCode);

    if (cachedUrl) {
      console.log("CACHE HIT ⚡");
      return res.redirect(cachedUrl);
    }

    console.log("CACHE MISS ❌");

    // 2️⃣ Query database
    const url = await repo.findByShortCode(shortCode);

    if (!url) {
      return res.status(404).send("URL not found");
    }

    // 3️⃣ Store in Redis
    await redisClient.set(shortCode, url.long_url);

    await repo.incrementClicks(shortCode);

    res.redirect(url.long_url);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
}

module.exports = {
  redirect,
};
