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
app.post("/login", (req, res) => {
  const{username,password}=req.body;
    if(username&&password){
      res.json({ token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c" });
    }

});

dbconnection();
app.listen(PORT, () => {
  console.log("server is listening on port 4000");
});
