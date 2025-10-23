import { ILeague } from '../../../../domain/entities/league';
import { ILeagueRepository } from '../../../../domain/repositories/league.repository';

export class GetAllLeagueUseCase {
  constructor(private leagueRepository: ILeagueRepository) {}

  async execute(): Promise<ILeague[]> {
    const leagues = await this.leagueRepository.findAll();
    return leagues;
  }
}
