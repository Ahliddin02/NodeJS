const { Client } = require("pg");
const pool = new Client({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "1234",
  database: "newDb",
});

pool.connect();
module.exports = {
  pool,
};
