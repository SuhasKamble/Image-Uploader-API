const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://suhas:suhas@cluster0.cj8de.mongodb.net/ImageUploader?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("MongoDB is connected");
  })
  .catch((e) => {
    console.log("MongoDB is not connected");
  });
