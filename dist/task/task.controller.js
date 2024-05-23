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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskController = void 0;
const common_1 = require("@nestjs/common");
const task_service_1 = require("./task.service");
let TaskController = class TaskController {
    constructor(taskService) {
        this.taskService = taskService;
    }
    async addTask(name, userId, priority) {
        if (!name || !userId || !priority) {
            throw new common_1.HttpException("Name, l'ID utilisateur et la priorité sont requis", common_1.HttpStatus.BAD_REQUEST);
        }
        if (!this.isValidUserId(userId) || isNaN(priority)) {
            throw new common_1.HttpException('ID utilisateur ou priorité invalide', common_1.HttpStatus.BAD_REQUEST);
        }
        if (priority < 0) {
            throw new common_1.HttpException('La priorité doit être positive', common_1.HttpStatus.BAD_REQUEST);
        }
        const task = this.taskService.addTask(name, userId, priority);
        return task;
    }
    async getUserTasks(userId) {
        if (this.isValidUserId(userId) == false) {
            throw new common_1.BadRequestException('Identifiant invalide');
        }
        const tasks = await this.taskService.getUserTasks(userId);
        if (tasks.length === 0) {
            throw new common_1.NotFoundException('No tasks found');
        }
        return tasks;
    }
    isValidUserId(userId) {
        const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
        return uuidRegex.test(userId);
    }
};
exports.TaskController = TaskController;
__decorate([
    (0, common_1.Post)(''),
    __param(0, (0, common_1.Body)('name')),
    __param(1, (0, common_1.Body)('userId')),
    __param(2, (0, common_1.Body)('priority')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Number]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "addTask", null);
__decorate([
    (0, common_1.Get)('user/:userId'),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "getUserTasks", null);
exports.TaskController = TaskController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [task_service_1.TaskService])
], TaskController);
//# sourceMappingURL=task.controller.js.map