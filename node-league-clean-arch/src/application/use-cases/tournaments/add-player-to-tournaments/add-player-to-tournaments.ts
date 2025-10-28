import { ITournamentRepository } from '../../../../domain/repositories/tournaments.repository';
import { IAddPlayerToTournamentUseCase } from '../../../../domain/use-cases/tournaments';

export class AddPlayerToTournamentUseCase implements IAddPlayerToTournamentUseCase {
  constructor(private tournamentRepository: ITournamentRepository) {}

  async addPlayerToTournament(tournamentId: string, playerId: string, points = 0): Promise<void> {
    await this.tournamentRepository.addPlayerToTournament(tournamentId, playerId, points);
  }
}
