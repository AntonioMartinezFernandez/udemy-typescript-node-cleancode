import IFood from '@/entities/Food';

export class Food {
  constructor(private readonly food: IFood) {}

  getName(): string {
    return this.food.name;
  }

  getDescription(): string {
    return this.food.description;
  }
}
