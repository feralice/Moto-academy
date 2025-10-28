import { ITournamentPlayer } from '../entities/tournament-player';

export interface ITournamentPlayerRepository {
  getPlayersWithPointsByLeague(leagueId: string): Promise<
    Array<{
      playerId: string;
      name: string;
      email: string;
      totalPoints: number;
    }>
  >;
}
