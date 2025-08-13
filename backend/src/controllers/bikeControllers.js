import Bike from "../models/bikes.js";

// Create Bike
export async function createBike(req, res) {
  try {

    const newBike = new Bike(req.body);
    await newBike.save();
    res.status(201).json(newBike);
  } catch (err) {
    res.status(500).json({ message: err.message });
    
  }
}

// Get All Bikes
export async function getBikes(req, res) {
  try {
    const bikes = await Bike.find();
    res.status(200).json(bikes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

// Get Bike by ID
export async function getBikeById(req, res) {
  try {
    const bike = await Bike.findById(req.params.id);
    if (!bike) return res.status(404).json({ message: "Bike not found" });
    res.status(200).json(bike);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

// Update Bike
export async function updateBike(req, res) {
  try {

    const updatedBike = await Bike.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedBike) return res.status(404).json({ message: "Bike not found" });
    res.status(200).json(updatedBike);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

// Delete Bike
export async function deleteBike(req, res) {
  try {
    const deletedBike = await Bike.findByIdAndDelete(req.params.id);
    if (!deletedBike) return res.status(404).json({ message: "Bike not found" });
    res.status(200).json({ message: "Bike deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}
