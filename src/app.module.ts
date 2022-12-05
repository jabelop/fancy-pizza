import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersServiceInterface } from './users/interfaces/users-service.interface';
import { UsersModule } from './users/users.module';
import { UsersService } from './users/users.service';

const usersServiceProvider = {provide: UsersServiceInterface, useClass: UsersService};

@Module({
  imports: [UsersModule],
  controllers: [AppController],
  providers: [
    AppService,
    usersServiceProvider
  ],
})
export class AppModule {}
