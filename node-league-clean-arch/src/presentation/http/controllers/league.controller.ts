import { Request, Response } from 'express';
import { CreateLeagueUseCase } from '../../../application/use-cases/league/create/create-league';
import { DeleteLeagueUseCase } from '../../../application/use-cases/league/delete/delete-league';
import { GetAllLeagueUseCase } from '../../../application/use-cases/league/get-all/get-all-league';
import { UpdateByLeagueIdUseCase } from '../../../application/use-cases/league/update/update-by-league-id';
import { SequelizeLeagueRepository } from '../../../infrastructure/repositories/league.repository';

const leagueRepository = new SequelizeLeagueRepository();
const createLeagueUseCase = new CreateLeagueUseCase(leagueRepository);
const getAllLeaguesUseCase = new GetAllLeagueUseCase(leagueRepository);
const updateLeagueUseCase = new UpdateByLeagueIdUseCase(leagueRepository);
const deleteLeagueUseCase = new DeleteLeagueUseCase(leagueRepository);

export class LeagueController {
  static async create(req: Request, res: Response) {
    try {
      console.log('Request Body:', req.body);
      const name = req.body.name;
      if (!name) {
        return res.status(400).json({ error: 'League name is required' });
      }
      const league = await createLeagueUseCase.createLeague(name);
      return res.status(201).json(league);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }

  static async findAll(req: Request, res: Response) {
    const leagues = await getAllLeaguesUseCase.getAllLeagues();
    return res.status(200).json(leagues);
  }

  static async update(req: Request, res: Response) {
    try {
      const id = req.params.id;
      if (!id) {
        return res.status(400).json({ error: 'Missing league id parameter' });
      }
      const updated = await updateLeagueUseCase.updateLeague(id, { name: req.body?.name });
      if (!updated) return res.status(404).json({ error: 'League not found' });
      return res.status(200).json(updated);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }

  static async delete(req: Request, res: Response) {
    const id = req.params.id;
    if (!id) {
      return res.status(400).json({ error: 'Missing league id parameter' });
    }
    await deleteLeagueUseCase.deleteLeague(id);
    return res.status(204).send();
  }
}
