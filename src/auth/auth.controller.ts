
import { Controller, Request, Post, UseGuards, Inject, Get } from '@nestjs/common';
import { AuthServiceInterface } from './interfaces/auth-service.interface';
import { JwtAuthGuard } from './strategies/jwt-auth.guard';
import { LocalAuthGuard } from './strategies/local-auth.guard';

@Controller()
export class AuthController {

    constructor(@Inject(AuthServiceInterface)private readonly authService: AuthServiceInterface) {}

    @UseGuards(LocalAuthGuard)
    @Post('auth/login')
    async login(@Request() req) {
      return this.authService.login(req.user);
  }
}
