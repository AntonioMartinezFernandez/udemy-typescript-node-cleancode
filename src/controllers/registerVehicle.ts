import { IHttpRequest, IHttpResponse } from '@/interfaces/IHttp';
import { TVehicle } from '../entities/Vehicle';

export class RegisterVehicle {
  constructor(private readonly vehicle: IHttpRequest) {}

  handler(vehicle: TVehicle = this.vehicle.body): IHttpResponse {
    console.log(vehicle);
    if (!vehicle.brand || vehicle.brand === '') {
      return {
        statusCode: 400,
        error: 'brand does not exist',
      };
    }

    if (!vehicle.model || vehicle.model === '') {
      return {
        statusCode: 400,
        error: 'model does not exist',
      };
    }

    if (!vehicle.year || vehicle.year < 1000) {
      return {
        statusCode: 400,
        error: 'year does not exist',
      };
    }

    return {
      statusCode: 200,
      body: {
        brand: vehicle.brand,
        model: vehicle.model,
        year: vehicle.year,
      },
    };
  }
}
