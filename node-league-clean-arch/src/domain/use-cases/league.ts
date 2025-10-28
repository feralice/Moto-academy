import { ILeague } from '../entities/league';

export interface ICreateLeagueUseCase {
  createLeague(name: string): Promise<ILeague>;
}

export interface IGetAllLeaguesUseCase {
  getAllLeagues(): Promise<ILeague[]>;
}

export interface IGetLeagueByIdUseCase {
  getLeagueById(id: string): Promise<ILeague>;
}

export interface IUpdateLeagueUseCase {
  updateLeague(id: string, data: Partial<ILeague>): Promise<ILeague>;
}

export interface IDeleteLeagueUseCase {
  deleteLeague(id: string): Promise<void>;
}
