import { ITournament } from '../../../../domain/entities/tournaments';
import { ITournamentRepository } from '../../../../domain/repositories/tournaments.repository';

export class GetAllTournamentsUseCase {
  constructor(private tournamentRepository: ITournamentRepository) {}

  async execute(): Promise<ITournament[]> {
    const tournaments = await this.tournamentRepository.findAll();
    return tournaments;
  }
}
