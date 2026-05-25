import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from './users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly usersService: UsersService,
  ) {}

  login(username?: string, password?: string) {
    if (!username || !password) {
      throw new BadRequestException('Usuario e senha sao obrigatorios.');
    }

    const user = this.usersService.validateCredentials(username, password);

    if (!user) {
      throw new UnauthorizedException('Credenciais invalidas.');
    }

    const payload = { sub: user.id, username: user.username };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
