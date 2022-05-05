import Bird from './bird';

export default class Penguin extends Bird {
  fly(): any {
    return new Error('I cant fly!');
  }

  walk() {
    return this.ibird.name + ' is walking!';
  }
}
