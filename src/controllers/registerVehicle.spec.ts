import { RegisterVehicle } from './registerVehicle';

describe('RegisterVehicle Class', () => {
  it('if the name does not exist return 400', () => {
    const httpRequest = { model: 'TT', year: 2011 };
    const sut = new RegisterVehicle(httpRequest);

    expect(sut.handler().statusCode).toEqual(400);
  });

  it('if the model does not exist return 400', () => {
    const httpRequest = { name: 'Audi', year: 2011 };
    const sut = new RegisterVehicle(httpRequest);

    expect(sut.handler().statusCode).toEqual(400);
  });

  it('if the year does not exist return 400', () => {
    const httpRequest = { name: 'Audi', model: 'TT' };
    const sut = new RegisterVehicle(httpRequest);

    expect(sut.handler().statusCode).toEqual(400);
  });

  it('if the name and model exist return 200, name, model and year', () => {
    const httpRequest = { name: 'Audi', model: 'TT', year: 2011 };
    const sut = new RegisterVehicle(httpRequest);
    const handler = sut.handler();

    expect(handler.statusCode).toEqual(200);
    expect(handler.name).toEqual('Audi');
    expect(handler.model).toEqual('TT');
    expect(handler.year).toEqual(2011);
  });
});
