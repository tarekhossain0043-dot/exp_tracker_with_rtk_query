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

// server connection
const con = require("./db/connection");
con
  .then((dbConn) => {
    if (!dbConn) return process.exit(1);
    // run server

    app.listen(port, () =>
      console.log(`server run on the port :http://localhost:${port}`)
    );
    app.on("error", (err) => {
      console.log("failed to connection on the http server");
    });
  })
  .catch((err) => {
    console.log("connection failed", err);
  });
