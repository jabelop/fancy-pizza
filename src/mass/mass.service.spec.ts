import { Test, TestingModule } from '@nestjs/testing';
import { MassServiceInterface } from './interfaces/mass-service.interface';
import { Mass } from './interfaces/mass.interface';
import { MassService } from './mass.service';

const massServiceProvider = {provide: MassServiceInterface, useClass: MassService};

describe('MassService', () => {
  let service: MassServiceInterface;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [massServiceProvider],
    }).compile();

    service = module.get<MassServiceInterface>(MassServiceInterface);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('Should return all the stored masses', async () => {
    const masses: Mass[] = await service.findAll();
    expect(JSON.stringify(masses))
      .toEqual(JSON.stringify([
        {
          id: "1",
          type: 'standart',
        },
        {
          id: "2",
          type: 'thing',
        },
        {
          id: "3",
          type: 'cream cheese roller',
        },
      ]));
  });

  it('Should return the second stored mass', async () => {
    const mass: Mass = await service.findOne("2");
    expect(JSON.stringify(mass))
      .toEqual(JSON.stringify(
        {
          id: "2",
          type: 'thing',
        }));
  });

  it('Should return undefined', async () => {
    const mass: Mass = await service.findOne("4");
    expect(mass)
      .toEqual(undefined);
  });
});
