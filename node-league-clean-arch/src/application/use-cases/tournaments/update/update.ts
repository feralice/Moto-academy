import { ITournament } from '../../../../domain/entities/tournaments';
import { ITournamentRepository } from '../../../../domain/repositories/tournaments.repository';

export class UpdateTournamentUseCase {
  constructor(private tournamentRepository: ITournamentRepository) {}

  async execute(id: string, data: Partial<ITournament>): Promise<ITournament> {
    const updatedTournament = await this.tournamentRepository.update(id, data);
    return updatedTournament;
  }
}
