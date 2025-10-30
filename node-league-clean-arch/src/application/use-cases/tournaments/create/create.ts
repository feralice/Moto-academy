import { ITournament } from '../../../../domain/entities/tournaments';
import { ITournamentRepository } from '../../../../domain/repositories/tournaments.repository';
import { ICreateTournamentUseCase } from '../../../../domain/use-cases/tournaments';

export class CreateTournamentUseCase implements ICreateTournamentUseCase {
  constructor(private tournamentRepository: ITournamentRepository) {}

  async createTournament(data: {
    leagueId: string;
    name: string;
    date: Date;
    numRounds: number;
  }): Promise<ITournament> {
    const tournament = await this.tournamentRepository.create({
      leagueId: data.leagueId,
      name: data.name,
      date: data.date,
      numRounds: data.numRounds,
    });

    return tournament;
  }
}
