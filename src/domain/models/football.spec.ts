import Football from './football';

describe('Football class', () => {
  it('Player', () => {
    const football = new Football('');
    const position = {
      name: 'Goalkeeper',
      tshirt: 1,
      skills: ['Kick Hard', 'Run Fast'],
    };

    expect(
      football.position(position.name, position.tshirt, position.skills),
    ).toEqual(['Goalkeeper', 1, ['Kick Hard', 'Run Fast']]);
  });

  it('Team', () => {
    const football = new Football('Manchester');
    const moneyBudget = 1000;

    expect(football.teamBudget(moneyBudget)).toBe(1000);
    expect(football.teamName()).toBe('Manchester');
  });
});
