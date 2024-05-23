import { PrismaService } from '../infrastructure/database/prisma.service';
import { Prisma, User } from '@prisma/client';
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    addUser(email: string): Promise<void>;
    getUser(email: string): Promise<User>;
    resetData(): Promise<Prisma.BatchPayload>;
}
