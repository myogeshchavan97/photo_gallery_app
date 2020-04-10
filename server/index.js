const express = require("express");
const cors = require("cors");
const photosRouter = require("./routers/photos");
require("./db/connection");
const app = express();

const PORT = process.env.PORT || 3300;

app.use(cors());
app.use(photosRouter);

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
