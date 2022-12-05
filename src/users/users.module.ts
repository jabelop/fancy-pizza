import { Module } from '@nestjs/common';
import { UsersServiceInterface } from './interfaces/users-service.interface';
import { UsersService } from './users.service';

const userServiceProvider = {provide: UsersServiceInterface, useClass: UsersService};

@Module({
  providers: [userServiceProvider],
  exports: [userServiceProvider]
})
export class UsersModule {}
