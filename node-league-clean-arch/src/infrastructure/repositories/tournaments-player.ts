import { ITournamentPlayerRepository } from '../../domain/repositories/tournament-player.repository';
import { TournamentPlayerModel } from '../models/tournament-player';
import { TournamentModel } from '../models/tournament';
import { PlayerModel } from '../models/player';
import { Sequelize, fn, col } from 'sequelize';

export class SequelizeTournamentPlayerRepository implements ITournamentPlayerRepository {
  async getPlayersWithPointsByLeague(leagueId: string) {
    if (!leagueId) throw new Error('leagueId is required');

    const rows = await TournamentPlayerModel.findAll({
      include: [
        {
          model: TournamentModel,
          as: 'tournament',
          attributes: [],
          where: { leagueId },
        },
        {
          model: PlayerModel,
          as: 'player',
          attributes: ['id', 'name', 'email'],
        },
      ],
      attributes: [
        [fn('SUM', col('TournamentPlayer.points')), 'totalPoints'],
        [col('player.id'), 'Player.id'],
        [col('player.name'), 'Player.name'],
        [col('player.email'), 'Player.email'],
      ],
      group: ['Player.id'],
      order: [[fn('SUM', col('TournamentPlayer.points')), 'DESC']],
      raw: true,
    });

    return rows.map((r: any) => ({
      id: r['Player.id'],
      name: r['Player.name'],
      email: r['Player.email'],
      totalPoints: Number(r.totalPoints),
    }));
  }
}
