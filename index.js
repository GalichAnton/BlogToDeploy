const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const fileUpload = require("express-fileupload");
const { initRoutes } = require("./blog-api/routes");
const morgan = require("morgan");
const path = require("node:path");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(
    fileUpload({
      createParentPath: true,
    }),
);
app.use(express.json());
app.use(morgan("dev"));

app.use(express.static(__dirname + "/build"));
app.use(express.static(path.join(__dirname, '/public/uploads')));
initRoutes(app);

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Сервер запущен http://localhost:${process.env.PORT}`);
    });
  })
  .catch(console.log);

module.exports.app = app;
