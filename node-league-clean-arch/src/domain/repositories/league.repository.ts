import { ILeague } from '../entities/league';

export interface ILeagueRepository {
  create(data: ILeague): Promise<ILeague>;
  findAll(): Promise<ILeague[]>;
  findById(id: string): Promise<ILeague>;
  update(id: string, data: Partial<ILeague>): Promise<ILeague>;
  delete(id: string): Promise<void>;
}
