import mongoose from "mongoose";


const bookSchema = new mongoose.Schema(
{
  title:  { type: String, required: true, trim: true, maxlength: 255 },
  author: { type: String, required: true, trim: true, maxlength: 255 },
  year:   { type: Number },
}, 
{
  timestamps: { createdAt: 'created_at', 
    updatedAt: 'updated_at' }
});
