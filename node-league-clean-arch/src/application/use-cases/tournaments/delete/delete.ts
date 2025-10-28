import { ITournamentRepository } from '../../../../domain/repositories/tournaments.repository';
import { IDeleteTournamentUseCase } from '../../../../domain/use-cases/tournaments';

export class DeleteTournamentUseCase implements IDeleteTournamentUseCase {
  constructor(private tournamentRepository: ITournamentRepository) {}

  async deleteTournament(id: string): Promise<void> {
    await this.tournamentRepository.delete(id);
  }
}
