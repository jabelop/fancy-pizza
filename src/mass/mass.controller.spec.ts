import { Test, TestingModule } from '@nestjs/testing';
import { MassServiceInterface } from './interfaces/mass-service.interface';
import { MassController } from './mass.controller';
import { MassService } from './mass.service';

const massServiceProvider = {provide: MassServiceInterface, useClass: MassService};

describe('MassController', () => {
  let controller: MassController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MassController],
      providers: [massServiceProvider]
    }).compile();

    controller = module.get<MassController>(MassController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
