import { Test, TestingModule } from '@nestjs/testing';
import { SizesServiceInterface } from './interfaces/sizes-service.interface';
import { SizesController } from './sizes.controller';
import { SizesService } from './sizes.service';

const sizesServiceProvider = {provide: SizesServiceInterface, useClass: SizesService};

describe('SizeController', () => {
  let controller: SizesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SizesController],
      providers: [sizesServiceProvider]
    }).compile();

    controller = module.get<SizesController>(SizesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
