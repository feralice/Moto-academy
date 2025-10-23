import { ILeagueRepository } from "../../../domain/repositories/league.repository";
import { ITournamentRepository } from "../../../domain/repositories/tournaments.repository";

export class GetPlayersWithPointsByLeagueUseCase {
  constructor(
    private leagueRepository: ILeagueRepository,
    private tournamentRepository: ITournamentRepository
  ) {}

  async execute(leagueId: string) {
    const league = await this.leagueRepository.findById(leagueId);
    if (!league) throw new Error('League not found');

    const tournaments = await this.tournamentRepository.findAll();
    const leagueTournaments = tournaments.filter((t) => t.leagueId === leagueId);

    const playerPointsMap: Record<string, { id: string; name: string; email: string; total_points: number }> = {};

    for (const t of leagueTournaments) {
      const playersInTournament = await this.tournamentRepository.getPlayersInTournament(t.id);
      for (const p of playersInTournament) {
        if (!playerPointsMap[p.id]) {
          playerPointsMap[p.id] = { id: p.id, name: p.name, email: p.email, total_points: 0 };
        }
        playerPointsMap[p.id].total_points += p.points;
      }
    }

    return Object.values(playerPointsMap);
  }
}
