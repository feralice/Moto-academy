import { ITournament } from '../../../../domain/entities/tournaments';
import { ITournamentRepository } from '../../../../domain/repositories/tournaments.repository';
import { IUpdateTournamentUseCase } from '../../../../domain/use-cases/tournaments';

export class UpdateTournamentUseCase implements IUpdateTournamentUseCase {
  constructor(private tournamentRepository: ITournamentRepository) {}

  async updateTournament(id: string, data: Partial<ITournament>): Promise<ITournament> {
    const updatedTournament = await this.tournamentRepository.update(id, data);
    return updatedTournament;
  }
}
