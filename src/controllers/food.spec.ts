import { Food } from './Food';

describe('Food', () => {
  it('Return name', () => {
    const food = new Food({ name: 'Banana', description: 'Healthy food' });
    expect(food.getName()).toEqual('Banana');
    expect(food.getDescription()).toEqual('Healthy food');
  });
});
