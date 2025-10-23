import { IPlayer } from '../../../../domain/entities/player';
import { IPlayerRepository } from '../../../../domain/repositories/player.repository';
import { v4 as uuidv4 } from 'uuid';

export class CreatePlayerUseCase {
  constructor(private playerRepository: IPlayerRepository) {}

  async execute({ name, email }: { name: string; email: string }): Promise<IPlayer> {
    const player = await this.playerRepository.create({
      id: uuidv4(),
      name,
      email,
    });
    return player;
  }
}
