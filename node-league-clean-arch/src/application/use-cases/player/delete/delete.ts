import { IPlayerRepository } from '../../../../domain/repositories/player.repository';
import { IDeletePlayerUseCase } from '../../../../domain/use-cases/player';

export class DeletePlayerUseCase implements IDeletePlayerUseCase {
  constructor(private playerRepository: IPlayerRepository) {}

  async deletePlayer(id: string): Promise<void> {
    await this.playerRepository.delete(id);
  }
}
