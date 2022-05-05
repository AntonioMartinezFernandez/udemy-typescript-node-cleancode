import Bird from './bird';
import Eagle from './eagle';
import Penguin from './penguin';

describe('Bird class', () => {
  it('Standard bird should fly', () => {
    const bird = new Bird({
      name: 'Canary',
      age: 3,
      origin: 'Canary Island',
    });

    expect(bird.fly()).toEqual('Canary is flying!');
  });

  it('Eagle should fly', () => {
    const eagle = new Eagle({
      name: 'Eagle',
      age: 13,
      origin: 'Spain',
    });

    expect(eagle.fly()).toEqual('Eagle is flying!');
  });

  it('Penguin shouldnt fly, but should walk', () => {
    const penguin = new Penguin({
      name: 'Penguin',
      age: 8,
      origin: 'Australia',
    });

    expect(penguin.fly()).toEqual(new Error('I cant fly!'));
    expect(penguin.walk()).toEqual('Penguin is walking!');
  });
});
