const express = require("express");
//const helmet = require("helmet")
const multer = require("multer");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./controllers/auth");
const userRoute = require("./controllers/users");
const postRoute = require("./controllers/posts");
const categoryRoute = require("./controllers/categories");
const path = require("path");
const cors = require("cors");

const app = express();
{/* HELMET IS BLOCKING IMAGES FROM THE BACKEND
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      ...helmet.contentSecurityPolicy.getDefaultDirectives(),
      "img-src": ["'self'", "http://localhost:5000/images/"],
    },
  },
}));
*/}
dotenv.config();

//connecting to mongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected!");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());

app.use("https://island-hoppers.herokuapp.com/images/", express.static(path.join(__dirname, "https://island-hoppers.herokuapp.com/images/")));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});
//endpoints
app.use("/auth", authRoute);
app.use("/users", userRoute);
app.use("/posts", postRoute);
app.use("/categories", categoryRoute);

if(process.env.NODE_ENV === "production"){
  app.use(express.static("client/build"));
  app.get("*", (req, res) =>{
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen( process.env.PORT, () => {
  console.log("connect to database & listening on", process.env.PORT);
});
