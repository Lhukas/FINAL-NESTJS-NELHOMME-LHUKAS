import { ConfigService } from '@nestjs/config';
import { DatabaseConfiguration } from './model/database-configuration';
export declare class ConfigurationService {
    private nestConfigService;
    private _databaseConfig;
    get databaseConfig(): DatabaseConfiguration;
    private set databaseConfig(value);
    constructor(nestConfigService: ConfigService);
    private setupEnvironment;
    private getVariableFromEnvFile;
}
