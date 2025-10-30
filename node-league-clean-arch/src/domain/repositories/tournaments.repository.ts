import { ITournament, NewTournament } from '../entities/tournaments';

export interface ITournamentRepository {
  create(data: NewTournament): Promise<ITournament>;
  update(id: string, data: Partial<ITournament>): Promise<ITournament | null>;
  delete(id: string): Promise<void>;
  findAll(): Promise<ITournament[]>;
  findById(id: string): Promise<ITournament | null>;
  addPlayerToTournament(tournamentId: string, playerId: string, points?: number): Promise<void>;
}
