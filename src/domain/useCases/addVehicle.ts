import IVehicle from '../interfaces/IVehicle';

export default interface AddVehicle {
  add: (vehicle: IVehicle) => Promise<IVehicle>;
}
