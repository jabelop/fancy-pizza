import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { AuthServiceInterface } from './auth/interfaces/auth-service.interface';
import { UsersServiceInterface } from './users/interfaces/users-service.interface';
import { UsersModule } from './users/users.module';
import { UsersService } from './users/users.service';

const usersServiceProvider = {provide: UsersServiceInterface, useClass: UsersService};
const authServiceProvider = {provide: AuthServiceInterface, useClass: AuthService};

@Module({
  imports: [UsersModule, AuthModule, JwtModule],
  controllers: [AppController, AuthController],
  providers: [
    AppService,
    usersServiceProvider,
    authServiceProvider
  ],
})
export class AppModule {}
