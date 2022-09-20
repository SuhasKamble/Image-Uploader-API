const express = require("express");
const cors = require("cors");
const path = require("path");
require("./db/conn");

const app = express();
const port = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const staticPath = path.join(__dirname, "./public");
app.use(express.static(staticPath));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/images", require("./routes/router"));

app.listen(port, () => console.log(`Server is listening on the port ${port}`));
