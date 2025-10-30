import { IPlayer, NewPlayer } from '../entities/player';

export interface IPlayerRepository {
  create(data: NewPlayer): Promise<IPlayer>;
  findAll(): Promise<IPlayer[]>;
  findById(id: string): Promise<IPlayer | null>;
  update(id: string, data: Partial<IPlayer>): Promise<IPlayer | null>;
  delete(id: string): Promise<void>;
}
