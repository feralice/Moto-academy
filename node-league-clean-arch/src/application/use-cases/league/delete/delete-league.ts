import { ILeagueRepository } from '../../../../domain/repositories/league.repository';

export class DeleteLeagueUseCase {
  constructor(private leagueRepository: ILeagueRepository) {}

  async execute(id: string): Promise<void> {
    await this.leagueRepository.delete(id);
  }
}
