import { ILeague } from '../../../../domain/entities/league';
import { ILeagueRepository } from '../../../../domain/repositories/league.repository';
import { IGetLeagueByIdUseCase } from '../../../../domain/use-cases/league';

export class FindByLeagueIdUseCase implements IGetLeagueByIdUseCase {
  constructor(private leagueRepository: ILeagueRepository) {}

  async getLeagueById(id: string): Promise<ILeague> {
    const league = await this.leagueRepository.findById(id);
    if (!league) {
      throw new Error('League not found');
    }
    return league;
  }
}
