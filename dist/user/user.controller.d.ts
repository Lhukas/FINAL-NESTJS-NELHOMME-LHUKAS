import { UserService } from './user.service';
import { User } from '@prisma/client';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    getUser(email: string): Promise<User>;
    addUser(email: string): Promise<void>;
    isValidEmail(email: string): boolean;
}
