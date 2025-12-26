const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config({ path: "./config.env" });
const port = process.env.SERVER_PORT || 5600;

// middleware

app.use(cors());
app.use(express.json());

// routes
app.use(require("./routes/route"));

// run server

app.listen(port, () =>
  console.log(`server run on the port :http://localhost:${port}`)
);
