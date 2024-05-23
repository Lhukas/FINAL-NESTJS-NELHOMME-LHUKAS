import { TaskService } from './task.service';
import { Task } from '@prisma/client';
export declare class TaskController {
    private taskService;
    constructor(taskService: TaskService);
    addTask(name: string, userId: string, priority: number): Promise<void>;
    getUserTasks(userId: string): Promise<Task[]>;
    isValidUserId(userId: string): boolean;
}
