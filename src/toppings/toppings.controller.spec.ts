import { Test, TestingModule } from '@nestjs/testing';
import { ToppingsServiceInterface } from './interfaces/toppings-service.interface';
import { ToppingsController } from './toppings.controller';
import { ToppingsService } from './toppings.service';

const toppingsServiceProvider = {provide: ToppingsServiceInterface, useClass: ToppingsService};

describe('ToppingsController', () => {
  let controller: ToppingsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ToppingsController],
      providers: [toppingsServiceProvider]
    }).compile();

    controller = module.get<ToppingsController>(ToppingsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
