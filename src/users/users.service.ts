
import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { UsersServiceInterface } from './interfaces/users-service.interface';

@Injectable()
export class UsersService implements UsersServiceInterface{
  private readonly users = [
    {
      userId: 1,
      username: 'user1',
      password: 'password1',
    },
    {
      userId: 2,
      username: 'user2',
      password: 'password2',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }
}
