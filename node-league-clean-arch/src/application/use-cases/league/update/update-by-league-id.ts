import { ILeague } from '../../../../domain/entities/league';
import { ILeagueRepository } from '../../../../domain/repositories/league.repository';
import { IUpdateLeagueUseCase } from '../../../../domain/use-cases/league';
import { NotFoundError } from '../../../erros/not-found';

export class UpdateByLeagueIdUseCase implements IUpdateLeagueUseCase {
  constructor(private leagueRepository: ILeagueRepository) {}

  async updateLeague(id: string, data: Partial<ILeague>): Promise<ILeague | null> {
    const verifyIfLeagueExists = await this.leagueRepository.findById(id);
    if (!verifyIfLeagueExists) {
      throw new NotFoundError('League not found');
    }
    const league = await this.leagueRepository.update(id, data);
    return league;
  }
}
