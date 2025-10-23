import { v4 } from 'uuid';
import { ITournament } from '../../../../domain/entities/tournaments';
import { ITournamentRepository } from '../../../../domain/repositories/tournaments.repository';

export class CreateTournamentUseCase {
  constructor(private tournamentRepository: ITournamentRepository) {}

  async execute(data: { leagueId: number; name: string; date: string; numRounds: number }): Promise<ITournament> {
    const tournament = await this.tournamentRepository.create({
      id: v4(),
      leagueId: data.leagueId,
      name: data.name,
      date: data.date,
      numRounds: data.numRounds,
    });

    return tournament;
  }
}
