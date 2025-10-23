import { ITournamentRepository } from '../../../../domain/repositories/tournaments.repository';

export class AddPlayerToTournamentUseCase {
  constructor(private tournamentRepository: ITournamentRepository) {}

  async execute(tournamentId: string, playerId: string, points = 0): Promise<void> {
    await this.tournamentRepository.addPlayerToTournament(tournamentId, playerId, points);
  }
}
