// import mongoose from "mongoose";

// const blogSchema = new mongoose.Schema({
//     title:{
//         type:String,
//         length:20,
//         required:true,
//     },
//     description:{
//         type:String,
//         required:true,
//     },
//     // author:{
//     //     type:mongoose.Schema.Types.ObjectId,
//     //     ref:"user",
//     // },
//   //  like:[{
//   //   type:mongoose.Schema.Types.ObjectId,
//   //   ref:"likes"
//   //  }],
//   //  comments:[{comment:{
//   //   type:String,
//   //  },
//   //  authorId:{
//   //   type:mongoose.Schema.Types.ObjectId,
//   //   ref:"comments"
//   //  }}],

// },{

//     timestemps:true
// }
// )

// const postmodels = mongoose.model("blogs", blogSchema)
// export default postmodels

import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

const Blog = mongoose.model('Blog', blogSchema);

export default Blog;