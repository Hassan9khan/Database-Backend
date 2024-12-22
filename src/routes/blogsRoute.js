// import express from "express"
// import { allblogs, createBlog } from "../controllers/blogsController.js"

// const router = express.Router()

// router.post('/createblog' , createBlog)
// router.get('/allblogs' , allblogs)

import express from "express";
import {
  getBlogs,
  createBlog,
  getBlogById,
  updateBlog,
  deleteBlog,
} from "../controllers/blogsController.js";

const router = express.Router();

router.get("/getblogs", getBlogs); 
router.post("/createblogs", createBlog); 
router.get("/singleblog/:id", getBlogById); 
router.put("/updateblog/:id", updateBlog); 
router.delete("/deleteblog/:id", deleteBlog); 

export default router;
