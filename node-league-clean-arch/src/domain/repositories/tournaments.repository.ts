import { ITournament } from '../entities/tournaments';

export interface ITournamentRepository {
  create(data: ITournament): Promise<ITournament>;
  update(id: string, data: Partial<ITournament>): Promise<ITournament>;
  delete(id: string): Promise<void>;
  findAll(): Promise<ITournament[]>;
  findById(id: string): Promise<ITournament>;
  addPlayerToTournament(tournamentId: string, playerId: string, points?: number): Promise<void>;
}
