import { ILeague } from '../../../../domain/entities/league';
import { ILeagueRepository } from '../../../../domain/repositories/league.repository';

export class FindByLeagueIdUseCase {
  constructor(private leagueRepository: ILeagueRepository) {}

  async execute(id: string): Promise<ILeague> {
    const league = await this.leagueRepository.findById(id);
    if (!league) {
      throw new Error('League not found');
    }
    return league;
  }
}
