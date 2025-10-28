import { IPlayer } from '../../../../domain/entities/player';
import { IPlayerRepository } from '../../../../domain/repositories/player.repository';
import { IUpdatePlayerUseCase } from '../../../../domain/use-cases/player';

export class UpdatePlayerUseCase implements IUpdatePlayerUseCase {
  constructor(private playerRepository: IPlayerRepository) {}

  async updatePlayer(id: string, data: Partial<IPlayer>): Promise<IPlayer> {
    const updatedPlayer = await this.playerRepository.update(id, data);
    return updatedPlayer;
  }
}
