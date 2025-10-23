import { ITournament } from '../../../../domain/entities/tournaments';
import { ITournamentRepository } from '../../../../domain/repositories/tournaments.repository';

export class GetTournamentByIdUseCase {
  constructor(private tournamentRepository: ITournamentRepository) {}

  async execute(id: string): Promise<ITournament> {
    const tournament = await this.tournamentRepository.findById(id);

    if (!tournament) {
      throw new Error('Tournament not found');
    }
    return tournament;
  }
}
