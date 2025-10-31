import { Request, Response } from 'express';
import { GetPlayersWithPointsByLeagueUseCase } from '../../../application/use-cases/tournaments-player/get-players-with-points';
import { SequelizeTournamentPlayerRepository } from '../../../infrastructure/repositories/tournaments-player';
import { SequelizeLeagueRepository } from '../../../infrastructure/repositories/league.repository';

const tournamentPlayerRepository = new SequelizeTournamentPlayerRepository();
const leagueRepository = new SequelizeLeagueRepository();
const getPlayersWithPointsByLeagueUseCase = new GetPlayersWithPointsByLeagueUseCase(
  tournamentPlayerRepository,
  leagueRepository
);

export class TournamentPlayerController {
  static async getPlayersWithPoints(req: Request, res: Response) {
    try {
      const { id: leagueId } = req.params;

      if (!leagueId) {
        return res.status(400).json({ error: 'Missing league id parameter' });
      }

      const players = await getPlayersWithPointsByLeagueUseCase.getPlayersWithPointsByLeague(leagueId);

      return res.status(200).json(players);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }
}
