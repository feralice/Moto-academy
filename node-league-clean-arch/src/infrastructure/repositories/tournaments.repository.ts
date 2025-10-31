import { NewTournament, ITournament, Tournament } from '../../domain/entities/tournaments';
import { ITournamentRepository } from '../../domain/repositories/tournaments.repository';
import { TournamentPlayerModel } from '../models/tournament-player';
import TournamentModel from '../models/tournament';

export class SequelizeTournamentRepository implements ITournamentRepository {
  async create(data: NewTournament): Promise<ITournament> {
    const record = await TournamentModel.create(data);
    return new Tournament(record.id, record.leagueId, record.name, record.date, record.numRounds);
  }

  async update(id: string, data: Partial<ITournament>): Promise<ITournament | null> {
    const record = await TournamentModel.findByPk(id);
    if (!record) return null;

    await record.update(data);
    return new Tournament(record.id, record.leagueId, record.name, record.date, record.numRounds);
  }

  async delete(id: string): Promise<void> {
    await TournamentModel.destroy({ where: { id } });
  }

  async findAll(): Promise<ITournament[]> {
    const records = await TournamentModel.findAll();
    return records.map((r) => new Tournament(r.id, r.leagueId, r.name, r.date, r.numRounds));
  }

  async findById(id: string): Promise<ITournament | null> {
    const record = await TournamentModel.findByPk(id);
    return record ? new Tournament(record.id, record.leagueId, record.name, record.date, record.numRounds) : null;
  }

  async addPlayerToTournament(tournamentId: string, playerId: string, points = 0): Promise<void> {
    await TournamentPlayerModel.upsert({
      tournamentId,
      playerId,
      points,
    });
  }
}
