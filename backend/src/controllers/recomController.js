import Rec from "../models/recommendation.js";

// Create Recommendation
export async function createRecommendation(req, res) {
  try {

    const newRec = new Rec(req.body);
    await newRec.save();
    res.status(201).json(newRec);
  } catch (err) {
    res.status(500).json({ message: err.message });
    
  }
}

// Get All Cars
export async function getRecommendations(req, res) {
  try {
    const recommendations = await Rec.find();
    res.status(200).json(recommendations);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

// Get Car by ID
export async function getRecommendationById(req, res) {
  try {
    const recommendation = await Rec.findById(req.params.id);
    if (!recommendation) return res.status(404).json({ message: "Recommendation not found" });
    res.status(200).json(recommendation);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

// Update Car
export async function updateRecommendation(req, res) {
  try {

    const updatedRecommendation = await Rec.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedRecommendation) return res.status(404).json({ message: "Recommendation not found" });
    res.status(200).json(updatedRecommendation);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

// Delete Recommendation
export async function deleteRecommendation(req, res) {
  try {
    const deletedRecommendation = await Rec.findByIdAndDelete(req.params.id);
    if (!deletedRecommendation) return res.status(404).json({ message: "Recommendation not found" });
    res.status(200).json({ message: "Recommendation deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}
