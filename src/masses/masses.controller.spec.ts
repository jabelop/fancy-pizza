import { Test, TestingModule } from '@nestjs/testing';
import { MassesServiceInterface } from './interfaces/masses-service.interface';
import { MassesController } from './masses.controller';
import { MassesService } from './masses.service';

const massServiceProvider = {provide: MassesServiceInterface, useClass: MassesService};

describe('MassController', () => {
  let controller: MassesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MassesController],
      providers: [massServiceProvider]
    }).compile();

    controller = module.get<MassesController>(MassesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
