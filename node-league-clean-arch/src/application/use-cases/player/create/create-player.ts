import { IPlayer } from '../../../../domain/entities/player';
import { IPlayerRepository } from '../../../../domain/repositories/player.repository';
import { v4 as uuidv4 } from 'uuid';
import { ICreatePlayerUseCase } from '../../../../domain/use-cases/player';

export class CreatePlayerUseCase implements ICreatePlayerUseCase {
  constructor(private playerRepository: IPlayerRepository) {}

  async createPlayer({ name, email }: { name: string; email: string }): Promise<IPlayer> {
    const player = await this.playerRepository.create({
      id: uuidv4(),
      name,
      email,
    });
    return player;
  }
}
