import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./src/db/index.js";
import todosRoutes from "./src/routes/todos.routes.js";

const app = express();
const port = process.env.PORT;

app.use(express.json());

// routes
app.use("/api/v1", todosRoutes);

app.get("/", (req, res) => {
  res.send("Hello fffy!");
});

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.log("Mongo DB Connection Failed !!!", error);
  });
