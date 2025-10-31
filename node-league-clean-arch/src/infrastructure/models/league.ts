import { DataTypes, Model, Sequelize, Optional } from 'sequelize';

interface LeagueAttributes {
  id: string;
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
}

interface LeagueCreationAttributes extends Optional<LeagueAttributes, 'id'> {}

export class LeagueModel extends Model<LeagueAttributes, LeagueCreationAttributes> implements LeagueAttributes {
  declare id: string;
  declare name: string;
  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  static initModel(sequelize: Sequelize): void {
    LeagueModel.init(
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
      },
      {
        sequelize,
        modelName: 'League',
        tableName: 'leagues',
        underscored: true,
      }
    );
  }
}
