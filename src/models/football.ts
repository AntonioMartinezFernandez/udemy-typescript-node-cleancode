import { IPlayer } from '../interfaces/IPlayer';
import { ITeam } from '../interfaces/ITeam';

export default class Football implements IPlayer, ITeam {
  footballTeamName: string;
  constructor(teamName: string) {
    this.footballTeamName = teamName;
  }

  position(name: string, tShirt: number, skills: any[]) {
    return [name, tShirt, skills];
  }

  teamBudget(money: number) {
    return money;
  }

  teamName(): string {
    return this.footballTeamName;
  }
}
