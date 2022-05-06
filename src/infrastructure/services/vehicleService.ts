import IVehicle from '../../domain/interfaces/IVehicle';
import vehicleRepository from '../repositories/vehicle/vehicleRepository';

export class VehicleService {
  async create(vehicle: IVehicle) {
    const savedVehicle = await vehicleRepository.create(vehicle);
    return savedVehicle;
  }
}

export default new VehicleService();
