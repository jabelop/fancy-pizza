
import { Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthServiceInterface } from './interfaces/auth-service.interface';
import { UsersServiceInterface } from 'src/users/interfaces/users-service.interface';
import { config } from 'src/config/config';

@Injectable()
export class AuthService implements AuthServiceInterface {
  constructor(
    @Inject(UsersServiceInterface) private readonly usersService: UsersServiceInterface,
    private readonly jwtService: JwtService
    ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any): Promise<any> {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload, {secret: config.JWT_SECRET}),
    };
  }
}
