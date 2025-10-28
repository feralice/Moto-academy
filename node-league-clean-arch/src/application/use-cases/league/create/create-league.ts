import { League } from '../../../../domain/entities/league';
import { ILeagueRepository } from '../../../../domain/repositories/league.repository';
import { v4 as uuidv4 } from 'uuid';
import { ICreateLeagueUseCase } from '../../../../domain/use-cases/league';

export class CreateLeagueUseCase implements ICreateLeagueUseCase {
  constructor(private leagueRepository: ILeagueRepository) {}

  async createLeague(name: string): Promise<League> {
    const league = await this.leagueRepository.create({ id: uuidv4(), name });
    return league;
  }
}
