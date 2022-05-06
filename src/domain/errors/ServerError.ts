export class ServerError extends Error {
  constructor(public stack: string) {
    super('Internal Server Error');
    this.message = 'Internal Server Error';
    this.stack = stack;
  }
}
