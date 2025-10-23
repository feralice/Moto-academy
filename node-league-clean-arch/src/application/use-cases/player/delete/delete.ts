import { IPlayerRepository } from '../../../../domain/repositories/player.repository';

export class DeletePlayerUseCase {
  constructor(private playerRepository: IPlayerRepository) {}

  async execute(id: string): Promise<void> {
    await this.playerRepository.delete(id);
  }
}
