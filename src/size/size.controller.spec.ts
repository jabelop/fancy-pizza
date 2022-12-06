import { Test, TestingModule } from '@nestjs/testing';
import { SizeServiceInterface } from './interfaces/size-service.interface';
import { SizeController } from './size.controller';
import { SizeService } from './size.service';

const sizeServiceProvider = {provide: SizeServiceInterface, useClass: SizeService};

describe('SizeController', () => {
  let controller: SizeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SizeController],
      providers: [sizeServiceProvider]
    }).compile();

    controller = module.get<SizeController>(SizeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
