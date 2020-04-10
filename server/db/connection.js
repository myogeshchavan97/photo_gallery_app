const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.MONGO_CONNECTION_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
