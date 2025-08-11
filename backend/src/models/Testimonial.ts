import mongoose from "mongoose";

const testimonialSchema = new mongoose.Schema({
  imageUrl: {
    type: String,
    required: [true, "Image URL is required"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model("Testimonial", testimonialSchema);
