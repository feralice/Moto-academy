import { DataTypes, Model, Sequelize, Optional } from 'sequelize';
import PlayerModel from './player';
import TournamentModel from './tournament';

export interface TournamentPlayerAttributes {
  id: string;
  tournamentId: string;
  playerId: string;
  points: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface TournamentPlayerCreationAttributes extends Optional<TournamentPlayerAttributes, 'id' | 'points'> {}

export class TournamentPlayerModel
  extends Model<TournamentPlayerAttributes, TournamentPlayerCreationAttributes>
  implements TournamentPlayerAttributes
{
  declare id: string;
  declare tournamentId: string;
  declare playerId: string;
  declare points: number;
  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  static initModel(sequelize: Sequelize): void {
    TournamentPlayerModel.init(
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
        },
        tournamentId: {
          type: DataTypes.UUID,
          allowNull: false,
          field: 'tournament_id',
        },
        playerId: {
          type: DataTypes.UUID,
          allowNull: false,
          field: 'player_id',
        },
        points: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
      },
      {
        sequelize,
        modelName: 'TournamentPlayer',
        tableName: 'tournament_players',
        underscored: true,
      }
    );
  }

  static associate(): void {
    TournamentPlayerModel.belongsTo(TournamentModel, { foreignKey: 'tournamentId', as: 'tournament' });
    TournamentPlayerModel.belongsTo(PlayerModel, { foreignKey: 'playerId', as: 'player' });
  }
}
