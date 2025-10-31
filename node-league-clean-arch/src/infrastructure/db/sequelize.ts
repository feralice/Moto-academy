import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import { LeagueModel } from '../models/league';
import { PlayerModel } from '../models/player';
import { TournamentModel } from '../models/tournament';
import { TournamentPlayerModel } from '../models/tournament-player';

dotenv.config();

export const sequelize = new Sequelize(
  process.env.DB_NAME as string,
  process.env.DB_USER as string,
  process.env.DB_PASSWORD as string,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    port: parseInt(process.env.DB_PORT || '3306'),
    logging: process.env.NODE_ENV === 'development' ? console.log : false,
  }
);

export async function connectDatabase() {
  try {
    LeagueModel.initModel(sequelize);
    PlayerModel.initModel(sequelize);
    TournamentModel.initModel(sequelize);
    TournamentPlayerModel.initModel(sequelize);

    // ✅ Associações centralizadas
    LeagueModel.hasMany(TournamentModel, { foreignKey: 'leagueId', as: 'tournaments' });
    TournamentModel.belongsTo(LeagueModel, { foreignKey: 'leagueId', as: 'league' });

    TournamentModel.hasMany(TournamentPlayerModel, { foreignKey: 'tournamentId', as: 'tournamentPlayers' });
    PlayerModel.hasMany(TournamentPlayerModel, { foreignKey: 'playerId', as: 'tournamentPlayers' });
    TournamentPlayerModel.belongsTo(TournamentModel, { foreignKey: 'tournamentId', as: 'tournament' });
    TournamentPlayerModel.belongsTo(PlayerModel, { foreignKey: 'playerId', as: 'player' });

    await sequelize.authenticate();
    console.log('✅ Database connected successfully.');
    await sequelize.sync();
    console.log('🧩 Models synchronized.');
  } catch (err) {
    console.error('❌ Failed to connect to the database:', err);
    process.exit(1);
  }
}
