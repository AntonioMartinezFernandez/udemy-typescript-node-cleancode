export class InvalidUrl extends Error {
  constructor(public url: string) {
    super(`Error in URL ${url}`);
  }
}
