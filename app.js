import express from "express";
import router from './routes/book.Routes.js'
const app = express();
app.use(express.json());

app.use("/api", router) ;

app.get("/", (req, res) => {
  res.send("Hola Mundo");
});

export default app;