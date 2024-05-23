"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigurationService = void 0;
const config_1 = require("@nestjs/config");
const database_configuration_1 = require("./model/database-configuration");
const common_1 = require("@nestjs/common");
let ConfigurationService = class ConfigurationService {
    get databaseConfig() {
        return this._databaseConfig;
    }
    set databaseConfig(value) {
        this._databaseConfig = value;
    }
    constructor(nestConfigService) {
        this.nestConfigService = nestConfigService;
        this.setupEnvironment();
    }
    setupEnvironment() {
        const databasePort = this.getVariableFromEnvFile(database_configuration_1.DATABASE_PORT);
        const databaseName = this.getVariableFromEnvFile(database_configuration_1.DATABASE_NAME);
        this._databaseConfig = {
            DATABASE_NAME: databaseName,
            DATABASE_PORT: databasePort,
        };
    }
    getVariableFromEnvFile(key) {
        const variable = this.nestConfigService.get(key);
        if (!variable) {
            throw new Error('No database port could be found from env file.');
        }
        return variable;
    }
};
exports.ConfigurationService = ConfigurationService;
exports.ConfigurationService = ConfigurationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], ConfigurationService);
//# sourceMappingURL=configuration.service.js.map