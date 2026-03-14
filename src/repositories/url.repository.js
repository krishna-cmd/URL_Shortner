const { pool } = require("../config/db");

async function findByLongUrl(longUrl) {
  const result = await pool.query("SELECT * FROM urls WHERE long_url = $1", [
    longUrl,
  ]);

  return result.rows[0];
}

async function createUrl(longUrl, shortCode) {
  const result = await pool.query(
    "INSERT INTO urls (longurl, short_code) VALUES ($1, $2)",
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
};
