import { ILeague, NewLeague } from '../entities/league';

export interface ILeagueRepository {
  create(data: NewLeague): Promise<ILeague>;
  findAll(): Promise<ILeague[]>;
  findById(id: string): Promise<ILeague | null>;
  update(id: string, data: Partial<ILeague>): Promise<ILeague | null>;
  delete(id: string): Promise<void>;
}
