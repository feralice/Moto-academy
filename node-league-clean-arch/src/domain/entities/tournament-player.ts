export interface ITournamentPlayer {
  id: string;
  tournamentId: string;
  playerId: string;
  points: number;
}

export class TournamentPlayer implements ITournamentPlayer {
  id: string;
  tournamentId: string;
  playerId: string;
  points: number;

  constructor(id: string, tournamentId: string, playerId: string, points: number) {
    this.id = id;
    this.tournamentId = tournamentId;
    this.playerId = playerId;
    this.points = points;
  }
}
