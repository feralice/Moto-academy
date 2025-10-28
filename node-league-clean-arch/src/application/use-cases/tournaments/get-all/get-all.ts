import { ITournament } from '../../../../domain/entities/tournaments';
import { ITournamentRepository } from '../../../../domain/repositories/tournaments.repository';
import { IGetAllTournamentsUseCase } from '../../../../domain/use-cases/tournaments';

export class GetAllTournamentsUseCase implements IGetAllTournamentsUseCase {
  constructor(private tournamentRepository: ITournamentRepository) {}

  async getAllTournaments(): Promise<ITournament[]> {
    const tournaments = await this.tournamentRepository.findAll();
    return tournaments;
  }
}
