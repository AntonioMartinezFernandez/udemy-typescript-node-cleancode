import IController from '../interfaces/IController';
import { IHttpRequest, IHttpResponse } from '../interfaces/IHttp';
import { MissingFormalParameter } from '../errors/MissingFormalParameter';
import { serverError, success } from '../helpers/httpHelpers';
import AddVehicle from '../useCases/addVehicle';

export class RegisterVehicle implements IController {
  constructor(private readonly addVehicle: AddVehicle) {
    this.addVehicle = addVehicle;
  }

  async handler(httpRequest: IHttpRequest): Promise<IHttpResponse> {
    try {
      const requiredProperties = ['brand', 'model', 'year', 'color'];

      for (const property of requiredProperties) {
        if (!httpRequest.body[property] || httpRequest.body[property] === '') {
          return {
            statusCode: 400,
            error: new MissingFormalParameter(`${property}`),
          };
        }
      }

      const { brand, model, year, color } = httpRequest.body;

      const vehicle = await this.addVehicle.add({ brand, model, year, color });

      return success(vehicle);
    } catch (error) {
      return serverError(error);
    }
  }
}
