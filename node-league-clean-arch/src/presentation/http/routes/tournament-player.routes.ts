import { Router } from 'express';
import { validateRequest } from '../middleware/request-validator';
import { getPlayersWithPointsValidator } from '../middleware/validators/tournament-player.validator';
import { TournamentPlayerController } from '../controllers/tournament-player.controller';

const tournamentPlayerRouter = Router();

tournamentPlayerRouter.get(
  '/:id/players-with-points',
  getPlayersWithPointsValidator,
  validateRequest,
  TournamentPlayerController.getPlayersWithPoints
);

export { tournamentPlayerRouter };
