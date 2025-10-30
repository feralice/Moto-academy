export interface ITournamentPlayerRepository {
  getPlayersWithPointsByLeague(leagueId: string): Promise<
    Array<{
      id: string;
      name: string;
      email: string;
      totalPoints: number;
    }>
  >;
}
