export class MissingFormalParameter extends Error {
  constructor(public parameter: string) {
    super(`Error in parameter ${parameter}`);
  }
}
