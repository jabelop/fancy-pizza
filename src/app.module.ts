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
import { MassModule } from './mass/mass.module';
import { MassController } from './mass/mass.controller';
import { MassServiceInterface } from './mass/interfaces/mass-service.interface';
import { MassService } from './mass/mass.service';

const usersServiceProvider = {provide: UsersServiceInterface, useClass: UsersService};
const authServiceProvider = {provide: AuthServiceInterface, useClass: AuthService};
const massServiceProvider = {provide: MassServiceInterface, useClass: MassService};


@Module({
  imports: [UsersModule, AuthModule, JwtModule, MassModule],
  controllers: [AppController, AuthController, MassController],
  providers: [
    AppService,
    usersServiceProvider,
    authServiceProvider,
    massServiceProvider
  ],
})
export class AppModule {}
