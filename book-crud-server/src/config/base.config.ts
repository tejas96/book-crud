export class BaseConfigService {
  constructor(private env: { [k: string]: string | undefined }) {}

  public getValue(key: string, throwOnMissing = true): string {
    const value = this.env[key];
    if (!value && throwOnMissing) {
      throw new Error(`config error - missing env.${key}`);
    }

    return value;
  }

  public ensureValues(keys: string[]) {
    if (!this.isTest()) {
      keys.forEach((k) => this.getValue(k, true));
    }
    return this;
  }

  public getNodeEnv() {
    return this.getValue('NODE_ENV', true);
  }

  public isProduction() {
    return this.getNodeEnv() === 'production';
  }

  public isStaging() {
    return this.getNodeEnv() === 'staging';
  }

  public isQA() {
    return this.getNodeEnv() === 'qa';
  }

  public isDevelopment() {
    return this.getNodeEnv() === 'development';
  }

  public isTest() {
    return this.getNodeEnv() === 'test';
  }

  public isLocalEnv() {
    return this.getNodeEnv() === 'local';
  }
}
