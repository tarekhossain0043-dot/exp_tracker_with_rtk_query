const express = require("express");
const cors = require("cors");
const app = express();
const port = 56798;

// middle ware

app.use(cors);
app.use(express.json());

app.listen(port, () => console.log(`server started with port : ${port}`));

// const express = require("express");
// const app = express();
// const cors = require("cors");
// const port = 5000;

// // use middleware

// app.use(cors());
// app.use(express.json());

// app.listen(port, () => console.log(`server is runnings on port : ${port}`));
