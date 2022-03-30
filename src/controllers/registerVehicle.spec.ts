import { RegisterVehicle } from './registerVehicle';

describe('RegisterVehicle Class', () => {
  it('if the brand does not exist return 400', () => {
    const httpRequest = { brand: '', model: 'TT', year: 2011 };
    const sut = new RegisterVehicle(httpRequest);

    expect(sut.handler().statusCode).toEqual(400);
  });

  it('if the model does not exist return 400', () => {
    const httpRequest = { brand: 'Audi', model: '', year: 2011 };
    const sut = new RegisterVehicle(httpRequest);

    expect(sut.handler().statusCode).toEqual(400);
  });

  it('if the year does not exist return 400', () => {
    const httpRequest = { brand: 'Audi', model: 'TT', year: 0 };
    const sut = new RegisterVehicle(httpRequest);

    expect(sut.handler().statusCode).toEqual(400);
  });

  it('if the brand and model exist return 200, brand, model and year', () => {
    const httpRequest = { brand: 'Audi', model: 'TT', year: 2011 };
    const sut = new RegisterVehicle(httpRequest);
    const handler = sut.handler();

    expect(handler.statusCode).toEqual(200);
    expect(handler.brand).toEqual('Audi');
    expect(handler.model).toEqual('TT');
    expect(handler.year).toEqual(2011);
  });
});
