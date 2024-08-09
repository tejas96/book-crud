import { DataSourceOptions } from 'typeorm';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import * as path from 'path';

import { configService } from './config.service.init';

export enum DB_CONNECTIONS {
  PG_LEADER = 'default', // System defaults to this if not specified.
}

function getPgConfig() {
  if (!configService.isReadReplicaValuesPresent()) {
    const dbUrl = configService.getValue('DATABASE_URL', false);
    if (dbUrl) {
      return {
        url: dbUrl,
      };
    } else {
      return {
        host: configService.getValue('POSTGRES_HOST'),
        port: parseInt(configService.getValue('POSTGRES_PORT')),
        username: configService.getValue('POSTGRES_USER'),
        password: configService.getValue('POSTGRES_PASSWORD'),
        database: configService.getValue('POSTGRES_DATABASE'),
      };
    }
  }
}

// This configuration is for the follower and the leader
export const sharedPostgresConfig: Partial<PostgresConnectionOptions> = {
  ssl: false,

  synchronize: false,

  extra: {
    max: configService.getValue('POSTGRES_CONNECTION_POOL_SIZE'),
    query_timeout: 25000, // After 25 seconds TypeORM will give query failed error
  },

  entities: [
    path.join(__dirname, '../modules/**/entities/*.entity{.ts,.js}'),
    path.join(__dirname, '../**/entities/*.entity{.ts,.js}'),
  ],

  namingStrategy: new SnakeNamingStrategy(),
};

export const ormConfig: DataSourceOptions = {
  name: DB_CONNECTIONS.PG_LEADER,
  type: 'postgres',
  schema: 'public',
  ...getPgConfig(),
  ...sharedPostgresConfig,
  migrationsTableName: 'migrations',
  // __dirname is either dist or src folder, meaning either
  // the compiled js in prod or the ts in dev.
  migrations: [path.join(__dirname, '../migrations/*{.ts,.js}')],
  // Run migrations automatically,
  // you can disable this if you prefer running migration manually.
  // By default: migrations will run on local environment
  migrationsRun: configService.isLocalEnv() ? false : false,
};
