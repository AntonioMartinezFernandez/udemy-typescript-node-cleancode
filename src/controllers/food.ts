export class Food {
  constructor(
    private readonly name: string,
    private readonly description: string,
  ) {}

  getName(): string {
    return this.name;
  }

  getDescription(): string {
    return this.description;
  }
}
