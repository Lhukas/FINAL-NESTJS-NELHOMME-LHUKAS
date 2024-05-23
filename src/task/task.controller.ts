import {
    BadRequestException,
    Body,
    Controller,
    Get,
    NotFoundException,
    Param,
    HttpStatus,
    HttpException,
    Post,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from '@prisma/client';

@Controller()
export class TaskController {
    constructor(private taskService: TaskService) {}

    @Post('')
    async addTask(
        @Body('name') name: string,
        @Body('userId') userId: string,
        @Body('priority') priority: number,
    ) {
        if (!name || !userId || !priority) {
            throw new HttpException(
                "Name, l'ID utilisateur et la priorité sont requis",
                HttpStatus.BAD_REQUEST,
            );
        }

        if (!this.isValidUserId(userId) || isNaN(priority)) {
            throw new HttpException(
                'ID utilisateur ou priorité invalide',
                HttpStatus.BAD_REQUEST,
            );
        }

        if (priority < 0) {
            throw new HttpException(
                'La priorité doit être positive',
                HttpStatus.BAD_REQUEST,
            );
        }

        const task = this.taskService.addTask(name, userId, priority);
        return task;
    }

    @Get('user/:userId')
    async getUserTasks(@Param('userId') userId: string): Promise<Task[]> {
        if (this.isValidUserId(userId) == false) {
            throw new BadRequestException('Identifiant invalide');
        }

        const tasks = await this.taskService.getUserTasks(userId);

        if (tasks.length === 0) {
            throw new NotFoundException('Aucune tâche trouvée');
        }
        return tasks;
    }

    isValidUserId(userId: string): boolean {
        const uuidRegex =
            /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
        return uuidRegex.test(userId);
    }
}
