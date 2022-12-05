
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { AuthServiceInterface } from './interfaces/auth-service.interface';
import { LocalStrategy } from './strategies/local.strategy';
import { config } from 'src/config/config';
import { JwtStrategy } from './strategies/jwt-strategy';

const authServiceProvider = {provide: AuthServiceInterface, useClass: AuthService};

@Module({
  imports: [
    UsersModule, 
    PassportModule, 
    JwtModule.register({
      secret:config.JWT_SECRET,
      signOptions: { expiresIn: '60s' },
    })],
  providers: [authServiceProvider, LocalStrategy, JwtStrategy],
})
export class AuthModule {}
