const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
const port = 3000;

app.listen(port, (err) => {
  if (err) console.log(err);
  console.log(`Server is up and running on port ${port}`);
});

const reviews = require("./reviews");

app.use("/reviews", reviews);
