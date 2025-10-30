import { ITournament } from '../entities/tournaments';

export interface ICreateTournamentUseCase {
  createTournament(data: Omit<ITournament, 'id'>): Promise<ITournament>;
}

export interface IGetAllTournamentsUseCase {
  getAllTournaments(): Promise<ITournament[]>;
}

export interface IUpdateTournamentUseCase {
  updateTournament(id: string, data: Partial<ITournament>): Promise<ITournament | null>;
}

export interface IDeleteTournamentUseCase {
  deleteTournament(id: string): Promise<void>;
}

export interface IAddPlayerToTournamentUseCase {
  addPlayerToTournament(tournamentId: string, playerId: string, points?: number): Promise<void>;
}
