import { DataTypes, Model, Sequelize, Optional } from 'sequelize';

export interface PlayerAttributes {
  id: string;
  name: string;
  email: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface PlayerCreationAttributes extends Optional<PlayerAttributes, 'id'> {}

export class PlayerModel extends Model<PlayerAttributes, PlayerCreationAttributes> implements PlayerAttributes {
  declare id: string;
  declare name: string;
  declare email: string;
  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  static initModel(sequelize: Sequelize): void {
    PlayerModel.init(
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
        },
        name: { type: DataTypes.STRING, allowNull: false },
        email: { type: DataTypes.STRING, allowNull: false, unique: true },
      },
      {
        sequelize,
        modelName: 'Player',
        tableName: 'players',
        underscored: true,
      }
    );
  }
}

export default PlayerModel;
