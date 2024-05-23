import { Injectable } from '@nestjs/common';
import { PrismaService } from '../infrastructure/database/prisma.service';
import { Prisma, User } from '@prisma/client';

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) {}

    async addUser(email: string): Promise<void> {
        await this.prisma.user.create({
            data: {
                email: email,
            },
        });

        return;
    }

    async getUser(email: string): Promise<User> {
        const user = await this.prisma.user.findUnique({
            where: {
                email: email,
            },
        });

        return user;
    }

    resetData(): Promise<Prisma.BatchPayload> {
        return this.prisma.user.deleteMany({});
    }
}
