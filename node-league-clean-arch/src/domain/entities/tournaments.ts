export interface ITournament {
  id: string;
  leagueId: number;
  name: string;
  date: string;
  numRounds: number;
}

export class Tournament implements ITournament {
  id: string;
  leagueId: number;
  name: string;
  date: string;
  numRounds: number;
  constructor(id: string, leagueId: number, name: string, date: string, numRounds: number) {
    this.id = id;
    this.leagueId = leagueId;
    this.name = name;
    this.date = date;
    this.numRounds = numRounds;
  }
}
