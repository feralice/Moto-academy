import { IPlayer } from '../../../../domain/entities/player';
import { IPlayerRepository } from '../../../../domain/repositories/player.repository';

export class UpdatePlayerUseCase {
  constructor(private playerRepository: IPlayerRepository) {}

  async execute(id: string, data: Partial<IPlayer>): Promise<IPlayer> {
    const updatedPlayer = await this.playerRepository.update(id, data);
    return updatedPlayer;
  }
}
