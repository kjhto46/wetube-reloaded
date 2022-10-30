import express from "express";

const PORT = 4000;

const app = express();

const gossipMiddleware = (req, res, next) => {
  console.log(`위치 이동 하려는 중 : ${req.url}`);
  next();
};

const handleHome = (req, res) => {
  return res.send("I love middleware");
};

app.get("/", gossipMiddleware, handleHome);

const handleListening = () =>
  console.log(`✅ Server listenting on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
