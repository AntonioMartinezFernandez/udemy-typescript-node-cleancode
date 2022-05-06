import { IBird } from '../../domain/interfaces/IBird';

export default class Bird {
  constructor(public ibird: IBird) {
    Object.assign(this.ibird);
  }

  fly() {
    return this.ibird.name + ' is flying!';
  }
}
