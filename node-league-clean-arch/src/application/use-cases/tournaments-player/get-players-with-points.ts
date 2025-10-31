import { ILeagueRepository } from '../../../domain/repositories/league.repository';
import { ITournamentPlayerRepository } from '../../../domain/repositories/tournament-player.repository';
import { IGetPlayersWithPointsByLeagueUseCase } from '../../../domain/use-cases/tournaments-player';
import { NotFoundError } from '../../erros/not-found';

export class GetPlayersWithPointsByLeagueUseCase implements IGetPlayersWithPointsByLeagueUseCase {
  constructor(
    private tournamentsPlayerRepository: ITournamentPlayerRepository,
    private leagueRepository: ILeagueRepository
  ) {}

  async getPlayersWithPointsByLeague(leagueId: string): Promise<
    Array<{
      id: string;
      name: string;
      email: string;
      totalPoints: number;
    }>
  > {
    const league = await this.leagueRepository.findById(leagueId);

    if (!league) {
      throw new NotFoundError('League not found');
    }

    return this.tournamentsPlayerRepository.getPlayersWithPointsByLeague(leagueId);
  }
}
