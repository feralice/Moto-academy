import { Sequelize } from 'sequelize';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

export const sequelize = new Sequelize(
  process.env.DB_NAME as string,
  process.env.DB_USER as string,
  process.env.DB_PASSWORD as string,
  {
    host: process.env.DB_HOST || 'mysql',
    port: Number(process.env.DB_PORT) || 3306,
    dialect: 'mysql',
    logging: false,
  }
);

const modelsPath = path.join(__dirname, '../models');

fs.readdirSync(modelsPath)
  .filter((file) => file.endsWith('.ts') || file.endsWith('.js'))
  .forEach(async (file) => {
    const modelModule = await import(path.join(modelsPath, file));
    const model = modelModule.default || modelModule;
    if (model?.initModel) model.initModel(sequelize);
  });

// 🔁 Aguarda o MySQL ficar pronto
(async () => {
  const MAX_RETRIES = 10;
  let retries = 0;

  while (retries < MAX_RETRIES) {
    try {
      await sequelize.authenticate();
      console.log('✅ Banco conectado com sucesso!');
      break;
    } catch (err) {
      retries++;
      console.log(`⏳ Tentativa ${retries}/${MAX_RETRIES}: aguardando MySQL...`);
      await new Promise((res) => setTimeout(res, 4000)); // espera 4 segundos
    }
  }

  if (retries === MAX_RETRIES) {
    console.error('❌ Falha ao conectar ao banco após várias tentativas.');
    process.exit(1);
  }
})();
