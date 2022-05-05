import Bird from './bird';

export default class Eagle extends Bird {
  fly() {
    return this.ibird.name + ' is flying!';
  }
}
