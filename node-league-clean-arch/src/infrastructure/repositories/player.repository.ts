import { NewPlayer, IPlayer, Player } from '../../domain/entities/player';
import { IPlayerRepository } from '../../domain/repositories/player.repository';
import { PlayerModel } from '../models/player';

export class SequelizePlayerRepository implements IPlayerRepository {
  async create(data: NewPlayer): Promise<IPlayer> {
    const record = await PlayerModel.create(data);
    return new Player(record.id, record.name, record.email);
  }

  async findAll(): Promise<IPlayer[]> {
    const records = await PlayerModel.findAll();
    return records.map((r) => new Player(r.id, r.name, r.email));
  }

  async findById(id: string): Promise<IPlayer | null> {
    const record = await PlayerModel.findByPk(id);
    return record ? new Player(record.id, record.name, record.email) : null;
  }

  async update(id: string, data: Partial<NewPlayer>): Promise<IPlayer | null> {
    const record = await PlayerModel.findByPk(id);
    if (!record) return null;
    await record.update(data);
    return new Player(record.id, record.name, record.email);
  }

  async delete(id: string): Promise<void> {
    await PlayerModel.destroy({ where: { id } });
  }
}
