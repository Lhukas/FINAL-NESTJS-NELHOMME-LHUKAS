import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { DatabaseModule } from '../infrastructure/database/database.module';

@Module({
    imports: [DatabaseModule],
    exports: [UserService],
    providers: [UserService],
    controllers: [UserController],
})
export class UserModule {}