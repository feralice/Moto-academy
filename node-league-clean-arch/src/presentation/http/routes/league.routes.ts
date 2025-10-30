import { Router } from 'express';
import { LeagueController } from '../controllers/league.controller';
import { validateRequest } from '../../middleware/request-validator';
import {
  createLeagueValidator,
  updateLeagueValidator,
  deleteLeagueValidator,
} from '../../middleware/validators/league';

const leagueRouter = Router();

leagueRouter.post('/', createLeagueValidator, validateRequest, LeagueController.create);

leagueRouter.get('/', LeagueController.findAll);

leagueRouter.put('/:id', updateLeagueValidator, validateRequest, LeagueController.update);

leagueRouter.delete('/:id', deleteLeagueValidator, validateRequest, LeagueController.delete);

export { leagueRouter };
