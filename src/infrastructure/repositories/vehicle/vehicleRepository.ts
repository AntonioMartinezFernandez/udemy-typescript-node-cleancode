import mongoose from 'mongoose';
import vehicleSchema from '../../db/mongodb/schemas/vehicleSchema';

export default mongoose.model('Vehicle', vehicleSchema);
