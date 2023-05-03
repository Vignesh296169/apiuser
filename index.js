const express = require("express");
const app = express();
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const dbconnection = require("./db/db_connect");
const cors = require("cors");
const  PORT=process.env.PORT || 5000;
const mainroute=require("./route/mainroute")
app.use(express.json());
app.use(cors());
app.use("/api",mainroute)
app.get("/", (req, res) => {
  res.json({ message: "from Home route" });
});

dbconnection();
app.listen(PORT, () => {
  console.log("server is listening on port 4000");
});
