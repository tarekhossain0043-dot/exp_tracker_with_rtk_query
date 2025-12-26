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

// const express = require("express");
// const app = express();
// const cors = require("cors");
// const port = 5000;

// // use middleware

// app.use(cors());
// app.use(express.json());

// app.listen(port, () => console.log(`server is runnings on port : ${port}`));
