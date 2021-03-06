import Fibonacci from './Fibonacci';

describe('Fiboancci', () => {
  it('Test fibnacci', () => {
    const fibonacci = new Fibonacci(5);
    expect(fibonacci.result()).toEqual(12);
  });

  it('Fibonacci negative', () => {
    const fibonacci = new Fibonacci(-5);
    expect(fibonacci.result()).toEqual(12);
  });
});
