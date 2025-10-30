import { IPlayerRepository } from '../../../../domain/repositories/player.repository';
import { ITournamentRepository } from '../../../../domain/repositories/tournaments.repository';
import { IAddPlayerToTournamentUseCase } from '../../../../domain/use-cases/tournaments';
import { NotFoundError } from '../../../erros/not-found';

export class AddPlayerToTournamentUseCase implements IAddPlayerToTournamentUseCase {
  constructor(
    private tournamentRepository: ITournamentRepository,
    private playerRepository: IPlayerRepository
  ) {}

  async addPlayerToTournament(tournamentId: string, playerId: string, points = 0): Promise<void> {
    const tournament = await this.tournamentRepository.findById(tournamentId);
    if (!tournament) {
      throw new NotFoundError('Tournament not found');
    }

    const player = await this.playerRepository.findById(playerId);
    if (!player) {
      throw new NotFoundError('Player not found');
    }

    await this.tournamentRepository.addPlayerToTournament(tournamentId, playerId, points);
  }
}
