import { ILeagueRepository } from '../../../../domain/repositories/league.repository';
import { IDeleteLeagueUseCase } from '../../../../domain/use-cases/league';

export class DeleteLeagueUseCase implements IDeleteLeagueUseCase {
  constructor(private leagueRepository: ILeagueRepository) {}

  async deleteLeague(id: string): Promise<void> {
    await this.leagueRepository.delete(id);
  }
}
