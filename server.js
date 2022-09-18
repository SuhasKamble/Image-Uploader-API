const express = require("express");
require("./db/conn");

const app = express();
const port = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/images", require("./routes/router"));

app.listen(port, () => console.log(`Server is listening on the port ${port}`));
