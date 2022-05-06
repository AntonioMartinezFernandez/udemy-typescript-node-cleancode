import { MissingFormalParameter } from '../errors/MissingFormalParameter';
import { RegisterVehicle } from './RegisterVehicle';

// Mock this function
const addVehicle = {
  add(vehicle: any) {
    return vehicle;
  },
};

describe('RegisterVehicle Class', () => {
  it('if the brand does not exist return 400', async () => {
    const httpRequest = {
      body: { brand: '', model: 'TT', year: 2011, color: 'black' },
    };

    const sut = new RegisterVehicle(addVehicle);

    const response = await sut.handler(httpRequest);

    expect(response.statusCode).toEqual(400);
    expect(response.error).toEqual(new MissingFormalParameter('brand'));
  });

  it('if the model does not exist return 400', async () => {
    const httpRequest = {
      body: { brand: 'Audi', model: '', year: 2011, color: 'black' },
    };

    const sut = new RegisterVehicle(addVehicle);

    const response = await sut.handler(httpRequest);

    expect(response.statusCode).toEqual(400);
    expect(response.error).toEqual(new MissingFormalParameter('model'));
  });

  it('if the year does not exist return 400', async () => {
    const httpRequest = {
      body: { brand: 'Audi', model: 'TT', year: null, color: 'black' },
    };

    const sut = new RegisterVehicle(addVehicle);

    const response = await sut.handler(httpRequest);

    expect(response.statusCode).toEqual(400);
    expect(response.error).toEqual(new MissingFormalParameter('year'));
  });

  it('if the color does not exist return 400', async () => {
    const httpRequest = {
      body: { brand: 'Audi', model: 'TT', year: 2011, color: '' },
    };

    const sut = new RegisterVehicle(addVehicle);

    const response = await sut.handler(httpRequest);

    expect(response.statusCode).toEqual(400);
    expect(response.error).toEqual(new MissingFormalParameter('color'));
  });

  it('if the brand and model exist return 200, brand, model and year', async () => {
    const httpRequest = {
      body: { brand: 'Audi', model: 'TT', year: 2011, color: 'black' },
    };

    const sut = new RegisterVehicle(addVehicle);

    const response = await sut.handler(httpRequest);

    expect(response.statusCode).toEqual(200);
    expect(response.body.brand).toEqual('Audi');
    expect(response.body.model).toEqual('TT');
    expect(response.body.year).toEqual(2011);
    expect(response.body.color).toEqual('black');
  });
});
