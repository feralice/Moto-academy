import { Request, Response } from 'express';
import { CreatePlayerUseCase } from '../../../application/use-cases/player/create/create-player';
import { DeletePlayerUseCase } from '../../../application/use-cases/player/delete/delete';
import { GetAllPlayersUseCase } from '../../../application/use-cases/player/find-all/find-all-player';
import { UpdatePlayerUseCase } from '../../../application/use-cases/player/update-by-id/update-by-id';
import { SequelizePlayerRepository } from '../../../infrastructure/repositories/player.repository';

const playerRepository = new SequelizePlayerRepository();
const createPlayerUseCase = new CreatePlayerUseCase(playerRepository);
const getAllPlayersUseCase = new GetAllPlayersUseCase(playerRepository);
const updatePlayerUseCase = new UpdatePlayerUseCase(playerRepository);
const deletePlayerUseCase = new DeletePlayerUseCase(playerRepository);

export class PlayerController {
  static async create(req: Request, res: Response) {
    try {
      const player = await createPlayerUseCase.createPlayer({ name: req.body.name, email: req.body.email });
      return res.status(201).json(player);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }

  static async findAll(req: Request, res: Response) {
    const players = await getAllPlayersUseCase.getAllPlayers();
    return res.status(200).json(players);
  }

  static async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      if (!id) return res.status(400).json({ error: 'Missing player id parameter' });

      const updated = await updatePlayerUseCase.updatePlayer(id, req.body);
      if (!updated) return res.status(404).json({ error: 'Player not found' });

      return res.status(200).json(updated);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }

  static async delete(req: Request, res: Response) {
    const { id } = req.params;
    if (!id) return res.status(400).json({ error: 'Missing player id parameter' });

    await deletePlayerUseCase.deletePlayer(id);
    return res.status(204).send();
  }
}
