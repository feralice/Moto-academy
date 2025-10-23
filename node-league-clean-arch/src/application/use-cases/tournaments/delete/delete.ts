import { ITournamentRepository } from '../../../../domain/repositories/tournaments.repository';

export class DeleteTournamentUseCase {
  constructor(private tournamentRepository: ITournamentRepository) {}

  async execute(id: string): Promise<void> {
    await this.tournamentRepository.delete(id);
  }
}
