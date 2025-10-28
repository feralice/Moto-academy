import { IPlayer } from "../entities/player";

export interface ICreatePlayerUseCase {
  createPlayer(name: string, email: string): Promise<IPlayer>;
}

export interface IGetAllPlayersUseCase {
  getAllPlayers(): Promise<IPlayer[]>;
}

export interface IGetPlayerByIdUseCase {
  getPlayerById(id: string): Promise<IPlayer>;
}

export interface IUpdatePlayerUseCase {
  updatePlayer(id: string, data: Partial<IPlayer>): Promise<IPlayer>;
}

export interface IDeletePlayerUseCase {
  deletePlayer(id: string): Promise<void>;
}
