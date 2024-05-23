import { PrismaService } from '../infrastructure/database/prisma.service';
import { Prisma, Task } from '@prisma/client';
export declare class TaskService {
    private prisma;
    constructor(prisma: PrismaService);
    addTask(name: string, userId: string, priority: number): Promise<void>;
    getTaskByName(name: string): Promise<Task | null>;
    getUserTasks(userId: string): Promise<Task[]>;
    resetData(): Promise<Prisma.BatchPayload>;
}
