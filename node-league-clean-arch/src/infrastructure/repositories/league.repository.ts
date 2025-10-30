import { NewLeague, ILeague, League } from '../../domain/entities/league';
import { ILeagueRepository } from '../../domain/repositories/league.repository';
import { LeagueModel } from '../models/league';

export class SequelizeLeagueRepository implements ILeagueRepository {
  async create(data: NewLeague): Promise<ILeague> {
    const record = await LeagueModel.create(data);
    return new League(record.id, record.name);
  }

  async findAll(): Promise<ILeague[]> {
    const records = await LeagueModel.findAll();
    return records.map((r) => new League(r.id, r.name));
  }

  async findById(id: string): Promise<ILeague | null> {
    const record = await LeagueModel.findByPk(id);
    return record ? new League(record.id, record.name) : null;
  }

  async update(id: string, data: Partial<NewLeague>): Promise<ILeague | null> {
    const record = await LeagueModel.findByPk(id);
    if (!record) return null;
    await record.update(data);
    return new League(record.id, record.name);
  }

  async delete(id: string): Promise<void> {
    await LeagueModel.destroy({ where: { id } });
  }
}
