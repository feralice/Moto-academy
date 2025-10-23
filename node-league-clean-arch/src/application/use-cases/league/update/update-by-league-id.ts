import { ILeague } from '../../../../domain/entities/league';
import { ILeagueRepository } from '../../../../domain/repositories/league.repository';

export class UpdateByLeagueIdUseCase {
  constructor(private leagueRepository: ILeagueRepository) {}

  async execute(id: string, data: Partial<ILeague>): Promise<ILeague> {
    const league = await this.leagueRepository.update(id, data);
    return league;
  }
}
