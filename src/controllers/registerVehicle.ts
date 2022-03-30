import { vehicle } from '../entities/vehicle';

export class RegisterVehicle {
  constructor(private readonly vehicle: vehicle) {}

  handler() {
    if (!this.vehicle.brand || this.vehicle.brand === '') {
      return {
        statusCode: 400,
        error: 'brand does not exist',
      };
    }

    if (!this.vehicle.model || this.vehicle.model === '') {
      return {
        statusCode: 400,
        error: 'model does not exist',
      };
    }

    if (!this.vehicle.year || this.vehicle.year < 1000) {
      return {
        statusCode: 400,
        error: 'year does not exist',
      };
    }

    return {
      statusCode: 200,
      brand: this.vehicle.brand,
      model: this.vehicle.model,
      year: this.vehicle.year,
    };
  }
}
