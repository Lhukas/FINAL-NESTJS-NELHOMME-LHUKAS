import { Injectable, NotImplementedException } from '@nestjs/common';
import { PrismaService } from '../infrastructure/database/prisma.service';
import { Prisma, Task } from '@prisma/client';

@Injectable()
export class TaskService {
    constructor(private prisma:PrismaService) {}

    async addTask(name: string, userId: string, priority: number): Promise<void> {

        await this.prisma.task.create({
           data:{
                name: name,
                userId : userId,
                priority: parseInt(priority.toString()),
             },
         });

         return ;
         
    }

    async getTaskByName(name: string): Promise<Task | null> {
        const task = await this.prisma.task.findFirst({
            where: {
                name: name,
            },
        });

        return task;
    }

    
    async getUserTasks(userId: string): Promise<Task[]> {
        const tasks = await this.prisma.task.findMany({
            where: {
                userId: userId,
            },
        });

        return tasks;
    }

   
    resetData(): Promise<Prisma.BatchPayload> {
        return this.prisma.task.deleteMany({});
    }
}
