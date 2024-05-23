// src/user/user.controller.ts
import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    ConflictException,
    BadRequestException,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '@prisma/client';

@Controller()
export class UserController {
    constructor(private userService: UserService) {}

    @Get('/:email')
    async getUser(@Param('email') email: string): Promise<User> {
        const user = await this.userService.getUser(email);
        if (!user) {
            throw new BadRequestException("l'utilisateur n'as pas été trouvé");
        }
        return user;
    }

    @Post()
    async addUser(@Body('email') email: string): Promise<void> {
        if (!this.isValidEmail(email)) {
            throw new BadRequestException('Mail invalide');
        } else {
            const existingUser = await this.userService.getUser(email);
            if (existingUser) {
                throw new ConflictException('User already exists');
            }

            return this.userService.addUser(email);
        }
    }

    isValidEmail(email: string): boolean {
        const emailRegex = /^[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        return emailRegex.test(email);
    }
}
