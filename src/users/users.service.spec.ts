import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { UsersServiceInterface } from './interfaces/users-service.interface';

const userServiceProvider = {provide: UsersServiceInterface, useClass: UsersService};

describe('UsersService', () => {
  let service: UsersServiceInterface;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [userServiceProvider],
    }).compile();

    service = module.get<UsersServiceInterface>(UsersServiceInterface);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return first user', async () => {
    const user1 = await service.findOne("user1");
    expect(JSON.stringify(user1))
    .toEqual(JSON.stringify({
      userId: 1,
      username: 'user1',
      password: 'password1',
    }));  
  });
});
