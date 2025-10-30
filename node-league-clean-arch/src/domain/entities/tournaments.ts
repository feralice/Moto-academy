export interface ITournament {
  id: string;
  leagueId: string;
  name: string;
  date: Date;
  numRounds: number;
}

export class Tournament implements ITournament {
  id: string;
  leagueId: string;
  name: string;
  date: Date;
  numRounds: number;
  constructor(id: string, leagueId: string, name: string, date: Date, numRounds: number) {
    this.id = id;
    this.leagueId = leagueId;
    this.name = name;
    this.date = date;
    this.numRounds = numRounds;
  }
}

export type NewTournament = Omit<ITournament, 'id'>;
