import { DataTypes, Model, Sequelize, Optional } from 'sequelize';

interface TournamentAttributes {
  id: string;
  leagueId: string;
  name: string;
  date: Date;
  numRounds: number;
  createdAt?: Date;
  updatedAt?: Date;
}

interface TournamentCreationAttributes extends Optional<TournamentAttributes, 'id'> {}

export class TournamentModel
  extends Model<TournamentAttributes, TournamentCreationAttributes>
  implements TournamentAttributes
{
  declare id: string;
  declare leagueId: string;
  declare name: string;
  declare date: Date;
  declare numRounds: number;
  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  static initModel(sequelize: Sequelize): void {
    TournamentModel.init(
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
        },
        leagueId: {
          type: DataTypes.UUID,
          allowNull: false,
          field: 'league_id',
        },
        name: { type: DataTypes.STRING, allowNull: false },
        date: { type: DataTypes.DATEONLY, allowNull: false },
        numRounds: { type: DataTypes.INTEGER, allowNull: false },
      },
      {
        sequelize,
        modelName: 'Tournament',
        tableName: 'tournaments',
        underscored: true,
      }
    );
  }
}
