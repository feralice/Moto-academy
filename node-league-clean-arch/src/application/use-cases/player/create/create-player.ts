import { IPlayer } from '../../../../domain/entities/player';
import { IPlayerRepository } from '../../../../domain/repositories/player.repository';
import { ICreatePlayerUseCase } from '../../../../domain/use-cases/player';

export class CreatePlayerUseCase implements ICreatePlayerUseCase {
  constructor(private playerRepository: IPlayerRepository) {}

  async createPlayer({ name, email }: { name: string; email: string }): Promise<IPlayer> {
    const player = await this.playerRepository.create({
      name,
      email,
    });
    return player;
  }
}
