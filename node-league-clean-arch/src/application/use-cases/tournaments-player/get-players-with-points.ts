import { ITournamentPlayerRepository } from '../../../domain/repositories/tournament-player.repository';
import { IGetPlayersWithPointsByLeagueUseCase } from '../../../domain/use-cases/tournaments-player';

export class GetPlayersWithPointsByLeagueUseCase implements IGetPlayersWithPointsByLeagueUseCase {
  constructor(private tournamentsPlayerRepository: ITournamentPlayerRepository) {}

  async getPlayersWithPointsByLeague(leagueId: string): Promise<
    Array<{
      playerId: string;
      name: string;
      email: string;
      totalPoints: number;
    }>
  > {
    return this.tournamentsPlayerRepository.getPlayersWithPointsByLeague(leagueId);
  }
}
