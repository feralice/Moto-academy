import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import { connectDatabase } from './src/infrastructure/db/sequelize';
import { leagueRouter } from './src/presentation/http/routes/league.routes';
import { playerRouter } from './src/presentation/http/routes/player.routes';
import { tournamentRouter } from './src/presentation/http/routes/tournament.routes';
import { tournamentPlayerRouter } from './src/presentation/http/routes/tournament-player.routes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(morgan('dev'));

app.get('/', (_req, res) => res.send('🏆 League Tournament API is running!'));
app.use('/api/leagues', leagueRouter);
app.use('/api/players', playerRouter);
app.use('/api/tournaments', tournamentRouter);
app.use('/api/tournament-players', tournamentPlayerRouter);

(async () => {
  await connectDatabase();
  app.listen(PORT, () => console.log(`🚀 Server is running on http://localhost:${PORT}`));
})();
