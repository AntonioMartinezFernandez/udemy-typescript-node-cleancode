import mongodbAddVehicle from '../db/mongodb/useCases/mongodbAddVehicle';
import { RegisterVehicle } from '../../domain/controllers/RegisterVehicle';

export const makeRegisterVehicle = (): RegisterVehicle => {
  const dbAddVehicle = new mongodbAddVehicle();

  const registerVehicle = new RegisterVehicle(dbAddVehicle);

  return registerVehicle;
};
