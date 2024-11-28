import mongoose from "mongoose";

const schema = mongoose.Schema;

const todoSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: [true, "description is required "],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Todos", todoSchema)