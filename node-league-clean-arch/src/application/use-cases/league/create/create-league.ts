import { League } from '../../../../domain/entities/league';
import { ILeagueRepository } from '../../../../domain/repositories/league.repository';
import { ICreateLeagueUseCase } from '../../../../domain/use-cases/league';

export class CreateLeagueUseCase implements ICreateLeagueUseCase {
  constructor(private leagueRepository: ILeagueRepository) {}

  async createLeague(name: string): Promise<League> {
    const league = await this.leagueRepository.create({ name });
    return league;
  }
}
