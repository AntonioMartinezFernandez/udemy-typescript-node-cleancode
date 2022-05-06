import mongoose from 'mongoose';

const vehicleSchema = new mongoose.Schema({
  brand: { type: String },
  model: { type: String },
  year: { type: Number },
  color: { type: String },
});

export default vehicleSchema;
