import { League } from '../../../../domain/entities/league';
import { ILeagueRepository } from '../../../../domain/repositories/league.repository';
import { v4 as uuidv4 } from 'uuid';

export class CreateLeagueUseCase {
  constructor(private leagueRepository: ILeagueRepository) {}

  async execute(name: string): Promise<League> {
    const league = await this.leagueRepository.create({ id: uuidv4(), name });
    return league;
  }
}
