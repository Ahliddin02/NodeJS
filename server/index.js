const express = require("express");
const cors = require("cors");
const { pool } = require("./db");
const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

app.get("/user", async (req, res) => {
  const result = await client.query("SELECT * FROM user");
  // console.log(result);
});

app.listen(PORT, () => {
  console.log(`Server is running in ${PORT}`);
});
