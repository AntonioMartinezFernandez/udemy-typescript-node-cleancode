import { RegisterVehicle } from './RegisterVehicle';

describe('RegisterVehicle Class', () => {
  it('if the brand does not exist return 400', () => {
    const httpRequest = { body: { brand: '', model: 'TT', year: 2011 } };
    const sut = new RegisterVehicle(httpRequest);

    expect(sut.handler().statusCode).toEqual(400);
    expect(sut.handler().error).toEqual(new Error('brand is invalid'));
  });

  it('if the model does not exist return 400', () => {
    const httpRequest = { body: { brand: 'Audi', model: '', year: 2011 } };
    const sut = new RegisterVehicle(httpRequest);

    expect(sut.handler().statusCode).toEqual(400);
    expect(sut.handler().error).toEqual(new Error('model is invalid'));
  });

  it('if the year does not exist return 400', () => {
    const httpRequest = { body: { brand: 'Audi', model: 'TT', year: null } };
    const sut = new RegisterVehicle(httpRequest);

    expect(sut.handler().statusCode).toEqual(400);
    expect(sut.handler().error).toEqual(new Error('year is invalid'));
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
