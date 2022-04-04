import { MissingFormalParameter } from '../errors/MissingFormalParameter';
import { IHttpRequest, IHttpResponse } from '@/interfaces/IHttp';
import { TVehicle } from '../entities/Vehicle';

export class RegisterVehicle {
  constructor(private readonly vehicle: IHttpRequest) {}

  handler(vehicle: TVehicle = this.vehicle.body): IHttpResponse {
    const requiredProperties = ['brand', 'model', 'year'];

    for (let property of requiredProperties) {
      if (!this.vehicle.body[property] || this.vehicle.body[property] === '') {
        return {
          statusCode: 400,
          error: new MissingFormalParameter(`${property}`),
        };
      }
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
