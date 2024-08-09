import { ConfigService } from './config.service';

const configService = new ConfigService(process.env).ensureValues([
  'NODE_ENV',
  'POSTGRES_CONNECTION_POOL_SIZE',
  'POSTGRES_DATABASE',
  'POSTGRES_HOST',
  'POSTGRES_PASSWORD',
  'POSTGRES_PORT',
  'POSTGRES_USER',
]);

export { configService };
