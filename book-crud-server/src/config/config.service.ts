import { Logger } from '@nestjs/common';

import { BaseConfigService } from './base.config';

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

export class ConfigService extends BaseConfigService {
  private readonly logger = new Logger(ConfigService.name);

  public isReadReplicaValuesPresent() {
    const keys = [
      'POSTGRES_READ_REPLICA_HOST',
      'POSTGRES_READ_REPLICA_PORT',
      'POSTGRES_READ_REPLICA_USER',
      'POSTGRES_READ_REPLICA_PASSWORD',
      'POSTGRES_READ_REPLICA_DATABASE',
    ];
    return keys.every((key) => this.getValue(key, false));
  }
}
