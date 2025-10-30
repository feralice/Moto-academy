// src/interfaces/http/routes/tournament.routes.ts
import { Router } from 'express';
import { TournamentController } from '../controllers/tournament.controller';
import { validateRequest } from '../../middleware/request-validator';
import {
  createTournamentValidator,
  updateTournamentValidator,
  deleteTournamentValidator,
  addPlayerToTournamentValidator,
} from '../../middleware/validators/tournaments';

const tournamentRouter = Router();

tournamentRouter.post('/', createTournamentValidator, validateRequest, TournamentController.create);
tournamentRouter.get('/', TournamentController.findAll);
tournamentRouter.put('/:id', updateTournamentValidator, validateRequest, TournamentController.update);
tournamentRouter.delete('/:id', deleteTournamentValidator, validateRequest, TournamentController.delete);

tournamentRouter.post('/:id/players', addPlayerToTournamentValidator, validateRequest, TournamentController.addPlayer);

export { tournamentRouter };
