const repo = require("../repositories/url.repository");
const { encode } = require("../utils/base62");

//console.log(repo);

async function shortenUrl(longUrl) {
  //check if the URL already exist
  const existing = await repo.findByLongUrl(longUrl);

  if (existing) {
    return existing.short_code;
  }

  // create placeholder record

  const newUrl = await repo.createUrl(longUrl, null);

  //Generate short code from ID

  const shortCode = encode(newUrl.id);

  await repo.updateShortCode(newUrl.id, shortCode);

  return shortCode;
}

module.exports = {
  shortenUrl,
};
