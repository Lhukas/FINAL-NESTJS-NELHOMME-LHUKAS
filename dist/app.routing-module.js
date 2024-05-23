"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRoutingModule = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const app_routes_1 = require("./app.routes");
const task_module_1 = require("./task/task.module");
const user_module_1 = require("./user/user.module");
let AppRoutingModule = class AppRoutingModule {
};
exports.AppRoutingModule = AppRoutingModule;
exports.AppRoutingModule = AppRoutingModule = __decorate([
    (0, common_1.Module)({
        exports: [core_1.RouterModule],
        imports: [core_1.RouterModule.register(app_routes_1.routes), task_module_1.TaskModule, user_module_1.UserModule],
    })
], AppRoutingModule);
//# sourceMappingURL=app.routing-module.js.map