import { Schema, model as _model } from "mongoose";

const listingSchema = new Schema({
  brand: { type: String, required: true, trim: true },
//   image: { type: String, required: true },
  price: { type: Number, required: true },
  eco: { type: String, required: true },
  yearKm: { type: String },
  model: { type: String, required: true },
  location: { type: String, required: true },
  date: { type: String, required: true }
}, { timestamps: true });

export default _model("Listing", listingSchema);
