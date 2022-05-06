import { Router } from 'express';
import { RouterAdapter } from '../adapters/expressRouterAdapter';
import { makeRegisterVehicle } from '../../domain/factories/makeRegisterVehicle';

export default (router: Router): void => {
  router.post('/register-vehicle', RouterAdapter(makeRegisterVehicle()));
};
