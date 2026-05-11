import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Public } from './public.decorator';

interface LoginDto {
  username: string;
  password: string;
}

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('login')
  login(@Body() body: LoginDto) {
    if (!body || !body.username || !body.password) {
      throw new BadRequestException('Usuario e senha sao obrigatorios.');
    }

    return this.authService.login(body.username, body.password);
  }
}
