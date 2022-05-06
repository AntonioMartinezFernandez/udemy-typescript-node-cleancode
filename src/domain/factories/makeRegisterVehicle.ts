import mongodbAddVehicle from '../../infrastructure/db/mongodb/useCases/mongodbAddVehicle';
import { RegisterVehicle } from '../controllers/RegisterVehicle';

export const makeRegisterVehicle = (): RegisterVehicle => {
  const dbAddVehicle = new mongodbAddVehicle();

  const registerVehicle = new RegisterVehicle(dbAddVehicle);

  return registerVehicle;
};
