import { IPlayer } from '../../../../domain/entities/player';
import { IPlayerRepository } from '../../../../domain/repositories/player.repository';

export class GetPlayerByIdUseCase {
  constructor(private playerRepository: IPlayerRepository) {}

  async execute(id: string): Promise<IPlayer> {
    const player = await this.playerRepository.findById(id);
      
    if (!player) {
      throw new Error('Player not found');
    }

    return player;
  }
}
