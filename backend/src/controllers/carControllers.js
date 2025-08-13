import Car from "../models/cars.js";

// Create Car
export async function createCar(req, res) {
  try {

    const newCar = new Car(req.body);
    await newCar.save();
    res.status(201).json(newCar);
  } catch (err) {
    res.status(500).json({ message: err.message });
    
  }
}

// Get All Cars
export async function getCars(req, res) {
  try {
    const cars = await Car.find();
    res.status(200).json(cars);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

// Get Car by ID
export async function getCarById(req, res) {
  try {
    const car = await Car.findById(req.params.id);
    if (!car) return res.status(404).json({ message: "Car not found" });
    res.status(200).json(car);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

// Update Car
export async function updateCar(req, res) {
  try {

    const updatedCar = await Car.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedCar) return res.status(404).json({ message: "Car not found" });
    res.status(200).json(updatedCar);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

// Delete Car
export async function deleteCar(req, res) {
  try {
    const deletedCar = await Car.findByIdAndDelete(req.params.id);
    if (!deletedCar) return res.status(404).json({ message: "Car not found" });
    res.status(200).json({ message: "Car deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}
