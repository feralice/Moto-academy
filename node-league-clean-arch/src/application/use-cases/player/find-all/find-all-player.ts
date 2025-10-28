import { IPlayer } from '../../../../domain/entities/player';
import { IPlayerRepository } from '../../../../domain/repositories/player.repository';
import { IGetAllPlayersUseCase } from '../../../../domain/use-cases/player';

export class GetAllPlayersUseCase implements IGetAllPlayersUseCase {
  constructor(private playerRepository: IPlayerRepository) {}

  async getAllPlayers(): Promise<IPlayer[]> {
    const players = await this.playerRepository.findAll();
    return players;
  }
}
