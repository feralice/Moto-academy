import { Router } from 'express';
import { PlayerController } from '../controllers/player.controller';
import { validateRequest } from '../../middleware/request-validator';
import {
  createPlayerValidator,
  updatePlayerValidator,
  deletePlayerValidator,
} from '../../middleware/validators/player.validator';

const playerRouter = Router();

playerRouter.post('/', createPlayerValidator, validateRequest, PlayerController.create);
playerRouter.get('/', PlayerController.findAll);
playerRouter.put('/:id', updatePlayerValidator, validateRequest, PlayerController.update);
playerRouter.delete('/:id', deletePlayerValidator, validateRequest, PlayerController.delete);

export { playerRouter };
