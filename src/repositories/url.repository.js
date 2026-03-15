const pool = require("../config/db");

async function findByLongUrl(longUrl) {
  const result = await pool.query("SELECT * FROM urls WHERE long_url = $1", [
    longUrl,
  ]);

  return result.rows[0];
}

async function updateShortCode(id, shortCode) {
  await pool.query("UPDATE urls SET short_code = $1 WHERE id = $2", [
    shortCode,
    id,
  ]);
}

async function createUrl(longUrl, shortCode) {
  const result = await pool.query(
    "INSERT INTO urls (long_url, short_code) VALUES ($1, $2) RETURNING *",
    [longUrl, shortCode],
  );
  return result.rows[0];
}

async function findByShortCode(code) {
  const result = await pool.query("SELECT * FROM urls WHERE short_code = $1", [
    code,
  ]);

  return result.rows[0];
}

module.exports = {
  findByLongUrl,
  createUrl,
  findByShortCode,
  updateShortCode,
};
