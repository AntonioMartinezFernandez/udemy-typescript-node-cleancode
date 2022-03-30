import { Food } from './food';

describe('Food', () => {
  it('Return name', () => {
    const food = new Food('Fruit', 'Healthy food');
    expect(food.getName()).toEqual('Fruit');
    expect(food.getDescription()).toEqual('Healthy food');
  });
});
