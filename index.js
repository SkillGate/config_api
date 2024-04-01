const express = require("express");
const app = express();
const dotenv = require("dotenv");
const configRoute = require("./routes/config");
const healthRoute = require("./routes/health");
const cors = require("cors");

dotenv.config();

var corsOptions = {
  origin: ["https://skillgate.github.io", "http://localhost:3000"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested, Content-Type, Accept Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "POST, PUT, PATCH, GET, DELETE");
    return res.status(200).json({});
  }
  next();
});

app.use(express.json());
app.use("/", healthRoute);
app.use("/api/v1/config", configRoute);

app.listen(process.env.PORT || 5002, () => {
  console.log("Backend server is running!");
});
