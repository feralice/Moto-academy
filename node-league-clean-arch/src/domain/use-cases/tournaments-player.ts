export interface IGetPlayersWithPointsByLeagueUseCase {
  getPlayersWithPointsByLeague(leagueId: string): Promise<
    Array<{
      playerId: string;
      name: string;
      email: string;
      totalPoints: number;
    }>
  >;
}
