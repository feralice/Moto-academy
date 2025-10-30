import { ITournament } from '../../../../domain/entities/tournaments';
import { ITournamentRepository } from '../../../../domain/repositories/tournaments.repository';
import { IUpdateTournamentUseCase } from '../../../../domain/use-cases/tournaments';
import { NotFoundError } from '../../../erros/not-found';

export class UpdateTournamentUseCase implements IUpdateTournamentUseCase {
  constructor(private tournamentRepository: ITournamentRepository) {}

  async updateTournament(id: string, data: Partial<ITournament>): Promise<ITournament | null> {
    const existingTournament = await this.tournamentRepository.findById(id);

    if (!existingTournament) {
      throw new NotFoundError('Tournament not found');
    }

    const updatedTournament = await this.tournamentRepository.update(id, data);
    return updatedTournament;
  }
}
