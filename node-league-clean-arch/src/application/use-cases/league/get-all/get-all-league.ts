import { ILeague } from '../../../../domain/entities/league';
import { ILeagueRepository } from '../../../../domain/repositories/league.repository';
import { IGetAllLeaguesUseCase } from '../../../../domain/use-cases/league';

export class GetAllLeagueUseCase implements IGetAllLeaguesUseCase {
  constructor(private leagueRepository: ILeagueRepository) {}

  async getAllLeagues(): Promise<ILeague[]> {
    const leagues = await this.leagueRepository.findAll();
    return leagues;
  }
}
