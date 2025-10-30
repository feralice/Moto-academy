import { IPlayer } from '../../../../domain/entities/player';
import { IPlayerRepository } from '../../../../domain/repositories/player.repository';
import { IUpdatePlayerUseCase } from '../../../../domain/use-cases/player';
import { NotFoundError } from '../../../erros/not-found';

export class UpdatePlayerUseCase implements IUpdatePlayerUseCase {
  constructor(private playerRepository: IPlayerRepository) {}

  async updatePlayer(id: string, data: Partial<IPlayer>): Promise<IPlayer | null> {
    const existingPlayer = await this.playerRepository.findById(id);

    if (!existingPlayer) {
      throw new NotFoundError('Player not found');
    }

    const updatedPlayer = await this.playerRepository.update(id, data);
    return updatedPlayer;
  }
}
