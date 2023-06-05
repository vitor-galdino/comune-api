import 'dotenv/config';
import path from 'path';
import 'reflect-metadata';
import { DataSource, DataSourceOptions } from 'typeorm';

const dataSourceConfig = (): DataSourceOptions => {
  const entitiesPath: string = path.join(__dirname, './entities/**.{ts,js}');
  const migrationsPath: string = path.join(__dirname, './migrations/**.{ts,js}');

  const dbUrl: string | undefined = process.env.DB_URL;
  const nodeEnv: string | undefined = process.env.NODE_ENV;

  if (!dbUrl) {
    throw new Error('Env var DB_URL doenst exist');
  }

  if (nodeEnv === 'production') {
    return {
      type: 'postgres',
      url: dbUrl,
      migrations: [migrationsPath],
      entities: [entitiesPath],
    };
  }

  return {
    type: 'postgres',
    url: dbUrl,
    synchronize: false,
    logging: true,
    migrations: [migrationsPath],
    entities: [entitiesPath]
  };
};

export const AppDataSource: DataSource = new DataSource(dataSourceConfig());

