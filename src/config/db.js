const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "urls",
  password: "Biopassword@7070",
  port: 5432,
});

module.exports = pool;
