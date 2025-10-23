import { IPlayer } from '../../../../domain/entities/player';
import { IPlayerRepository } from '../../../../domain/repositories/player.repository';

export class GetAllPlayersUseCase {
  constructor(private playerRepository: IPlayerRepository) {}

  async execute(): Promise<IPlayer[]> {
    const players = await this.playerRepository.findAll();
    return players;
  }
}
