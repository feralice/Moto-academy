import { ILeague } from '../../../../domain/entities/league';
import { ILeagueRepository } from '../../../../domain/repositories/league.repository';
import { IUpdateLeagueUseCase } from '../../../../domain/use-cases/league';

export class UpdateByLeagueIdUseCase implements IUpdateLeagueUseCase {
  constructor(private leagueRepository: ILeagueRepository) {}

  async updateLeague(id: string, data: Partial<ILeague>): Promise<ILeague> {
    const verifyIfLeagueExists = await this.leagueRepository.findById(id);
    if (!verifyIfLeagueExists) {
      throw new Error('League not found');
    }
    const league = await this.leagueRepository.update(id, data);
    return league;
  }
}
