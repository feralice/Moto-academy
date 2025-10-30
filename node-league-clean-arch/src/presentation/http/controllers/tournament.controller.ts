import { Request, Response } from 'express';
import { AddPlayerToTournamentUseCase } from '../../../application/use-cases/tournaments/add-player-to-tournaments/add-player-to-tournaments';
import { CreateTournamentUseCase } from '../../../application/use-cases/tournaments/create/create';
import { DeleteTournamentUseCase } from '../../../application/use-cases/tournaments/delete/delete';
import { GetAllTournamentsUseCase } from '../../../application/use-cases/tournaments/get-all/get-all';
import { UpdateTournamentUseCase } from '../../../application/use-cases/tournaments/update/update';
import { SequelizePlayerRepository } from '../../../infrastructure/repositories/player.repository';
import { SequelizeTournamentRepository } from '../../../infrastructure/repositories/tournaments.repository';

const tournamentRepository = new SequelizeTournamentRepository();
const playerRepository = new SequelizePlayerRepository();

const createTournamentUseCase = new CreateTournamentUseCase(tournamentRepository);
const getAllTournamentsUseCase = new GetAllTournamentsUseCase(tournamentRepository);
const updateTournamentUseCase = new UpdateTournamentUseCase(tournamentRepository);
const deleteTournamentUseCase = new DeleteTournamentUseCase(tournamentRepository);
const addPlayerToTournamentUseCase = new AddPlayerToTournamentUseCase(tournamentRepository, playerRepository);

export class TournamentController {
  static async create(req: Request, res: Response) {
    try {
      const { leagueId, name, date, numRounds } = req.body;
      const tournament = await createTournamentUseCase.createTournament({ leagueId, name, date, numRounds });
      return res.status(201).json(tournament);
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }

  static async findAll(req: Request, res: Response) {
    const tournaments = await getAllTournamentsUseCase.getAllTournaments();
    return res.status(200).json(tournaments);
  }

  static async update(req: Request, res: Response) {
    try {
      const id = req.params.id;
      if (!id) {
        return res.status(400).json({ error: 'Missing tournament id parameter' });
      }
      const updated = await updateTournamentUseCase.updateTournament(id, req.body);
      if (!updated) return res.status(404).json({ error: 'Tournament not found' });
      return res.status(200).json(updated);
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }

  static async delete(req: Request, res: Response) {
    try {
      const id = req.params.id;
      if (!id) {
        return res.status(400).json({ error: 'Missing tournament id parameter' });
      }
      await deleteTournamentUseCase.deleteTournament(id);
      return res.status(204).send();
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }

  static async addPlayer(req: Request, res: Response) {
    try {
      const tournamentId = req.params.id;
      if (!tournamentId) {
        return res.status(400).json({ error: 'Missing tournament id parameter' });
      }
      const { playerId, points } = req.body;
      await addPlayerToTournamentUseCase.addPlayerToTournament(tournamentId, playerId, points ?? 0);
      return res.status(201).json({ message: 'Player added to tournament successfully' });
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }
}
