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
import { SizesModule } from './sizes/sizes.module';
import { SizesController } from './sizes/sizes.controller';
import { SizesServiceInterface } from './sizes/interfaces/sizes-service.interface';
import { SizesService } from './sizes/sizes.service';

const usersServiceProvider = {provide: UsersServiceInterface, useClass: UsersService};
const authServiceProvider = {provide: AuthServiceInterface, useClass: AuthService};
const massServiceProvider = {provide: MassServiceInterface, useClass: MassService};
const sizesServiceProvider = {provide: SizesServiceInterface, useClass: SizesService};


@Module({
  imports: [UsersModule, AuthModule, JwtModule, MassModule, SizesModule],
  controllers: [AppController, AuthController, MassController, SizesController],
  providers: [
    AppService,
    usersServiceProvider,
    authServiceProvider,
    massServiceProvider,
    sizesServiceProvider
  ],
})
export class AppModule {}
