import { RegisterVehicle } from './RegisterVehicle';

describe('RegisterVehicle Class', () => {
  it('if the brand does not exist return 400', () => {
    const httpRequest = { body: { brand: '', model: 'TT', year: 2011 } };
    const sut = new RegisterVehicle(httpRequest);

    expect(sut.handler().statusCode).toEqual(400);
  });

  it('if the model does not exist return 400', () => {
    const httpRequest = { body: { brand: 'Audi', model: '', year: 2011 } };
    const sut = new RegisterVehicle(httpRequest);

    expect(sut.handler().statusCode).toEqual(400);
  });

  it('if the year does not exist return 400', () => {
    const httpRequest = { body: { brand: 'Audi', model: 'TT', year: 11 } };
    const sut = new RegisterVehicle(httpRequest);

    expect(sut.handler().statusCode).toEqual(400);
  });

  it('if the brand and model exist return 200, brand, model and year', () => {
    const httpRequest = { body: { brand: 'Audi', model: 'TT', year: 2011 } };
    const sut = new RegisterVehicle(httpRequest);
    const handler = sut.handler();

    expect(handler.statusCode).toEqual(200);
    expect(handler.body.brand).toEqual('Audi');
    expect(handler.body.model).toEqual('TT');
    expect(handler.body.year).toEqual(2011);
  });
});
