import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import { leagueRouter } from './src/presentation/http/routes/league.routes';
import { playerRouter } from './src/presentation/http/routes/player.routes';
import { tournamentRouter } from './src/presentation/http/routes/tournament.routes';
import { tournamentPlayerRouter } from './src/presentation/http/routes/tournament-player.routes';
import { sequelize } from './src/infrastructure/db/sequelize';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(morgan('dev'));

app.get('/', (_req, res) => res.send('🏆 League Tournament API is running!'));
app.use('/api/leagues', leagueRouter);
app.use('/api/players', playerRouter);
app.use('/api/tournaments', tournamentRouter);
app.use('/api/leagues', tournamentPlayerRouter);

(async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Database connected successfully.');
    await sequelize.sync();

    app.listen(PORT, () => {
      console.log(`🚀 Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('❌ Failed to connect to the database:', error);
    process.exit(1);
  }
})();
