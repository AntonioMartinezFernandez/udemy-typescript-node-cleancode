export class RegisterVehicle {
  private readonly name: string;
  private readonly model: string;
  private readonly year: number;

  constructor(httpRequest: any) {
    this.name = httpRequest.name;
    this.model = httpRequest.model;
    this.year = httpRequest.year;
  }

  handler() {
    if (!this.name) {
      return {
        statusCode: 400,
        error: 'name does not exist',
      };
    }

    if (!this.model) {
      return {
        statusCode: 400,
        error: 'model does not exist',
      };
    }

    if (!this.year) {
      return {
        statusCode: 400,
        error: 'year does not exist',
      };
    }

    return {
      statusCode: 200,
      name: this.name,
      model: this.model,
      year: this.year,
    };
  }
}
