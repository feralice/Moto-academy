import { DataTypes, Model, Sequelize, Optional } from 'sequelize';

interface TournamentPlayerAttributes {
  id: string;
  tournamentId: string;
  playerId: string;
  points: number;
  createdAt?: Date;
  updatedAt?: Date;
}

interface TournamentPlayerCreationAttributes extends Optional<TournamentPlayerAttributes, 'id' | 'points'> {}

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
}
