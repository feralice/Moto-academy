import { IPlayer } from '../entities/player';

export interface IPlayerRepository {
  create(data: IPlayer): Promise<IPlayer>;
  findAll(): Promise<IPlayer[]>;
  findById(id: string): Promise<IPlayer>;
  update(id: string, data: Partial<IPlayer>): Promise<IPlayer>;
  delete(id: string): Promise<void>;
}
