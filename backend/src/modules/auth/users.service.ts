import { Injectable } from '@nestjs/common';
import { UserRecord } from './types';

@Injectable()
export class UsersService {
  private readonly users: UserRecord[] = [
    {
      id: '1',
      username: 'admin',
      password: 'admin',
      role: 'admin',
    },
  ];

  findByUsername(username: string) {
    return this.users.find((user) => user.username === username);
  }

  validateCredentials(username: string, password: string) {
    const user = this.findByUsername(username);

    if (!user || user.password !== password) {
      return null;
    }

    return user;
  }
}
