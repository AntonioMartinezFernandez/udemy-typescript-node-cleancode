import { IHttpRequest, IHttpResponse } from '../../domain/interfaces/IHttp';
import { Food } from './Food';

describe('Food', () => {
  it('Return name', () => {
    const request: IHttpRequest = {
      body: { name: 'Banana', description: 'Healthy food' },
    };
    const response: IHttpResponse = new Food(request).getName();

    expect(response.body.name).toEqual('Banana');
  });
  it('Return description', () => {
    const request: IHttpRequest = {
      body: { name: 'Banana', description: 'Healthy food' },
    };
    const response: IHttpResponse = new Food(request).getDescription();

    expect(response.body.description).toEqual('Healthy food');
  });

  it('Return Food', () => {
    const foodProperties = {
      body: { name: 'Banana', description: 'Healthy Food', price: 2 },
    };
    const food = new Food(foodProperties);
    expect(food.getFood()).toEqual(foodProperties.body);
  });
});
