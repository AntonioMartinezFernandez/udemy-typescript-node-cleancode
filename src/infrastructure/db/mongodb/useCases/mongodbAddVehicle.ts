import IVehicle from '../../../../domain/interfaces/IVehicle';
import AddVehicle from '../../../../domain/useCases/addVehicle';
import vehicleService from '../../../../infrastructure/services/vehicleService';

export default class mongodbAddVehicle implements AddVehicle {
  async add(vehicle: IVehicle): Promise<IVehicle> {
    vehicleService.create(vehicle);
    vehicleService.sendmail(vehicle);
    return vehicle;
  }
}
