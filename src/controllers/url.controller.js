const urlService = require("../services/url.service");

async function shorten(req, res) {
  try {
    const { url } = req.body;

    const shortCode = await urlService.shortenUrl(url);

    res.json({
      shortUrl: `http://localhost:3000/${shortCode}`,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Unable to shorten the URL" });
  }
}

module.exports = {
  shorten,
};
