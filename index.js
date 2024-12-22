import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors"
import bodyParser from 'body-parser';
import connectDB from "./src/db/index.js";
import blogsRoute from "./src/routes/blogsRoute.js";

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(bodyParser.json());
app.use(cors())

// routes
app.use("/api/v1", blogsRoute);

// app.get("/api/v1", (req, res) => {
//   res.send("Hello !");
// });

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.log("Mongo DB Connection Failed !!!", error);
  });
