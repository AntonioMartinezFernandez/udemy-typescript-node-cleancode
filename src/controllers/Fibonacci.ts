export default class Fibonacci {
  seed: number;
  constructor(number: number) {
    this.seed = Math.abs(number);
  }

  private calcFibonacci = (n: number): number => {
    if (n === 0) return 0;
    if (n === 1 || n === 2) return 1;

    return this.calcFibonacci(n - 1) + this.calcFibonacci(n - 2);
  };

  private sumFibonacci = (n: number): number => {
    let result: number = 0;
    for (let i = 0; i < n + 1; i++) {
      result = result + this.calcFibonacci(i);
    }
    return result;
  };

  result = (): number => {
    return this.sumFibonacci(this.seed);
  };
}
