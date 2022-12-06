import { Test, TestingModule } from '@nestjs/testing';
import { MassesServiceInterface } from './interfaces/masses-service.interface';
import { Mass } from './interfaces/mass.interface';
import { MassesService } from './masses.service';

const massesServiceProvider = {provide: MassesServiceInterface, useClass: MassesService};

describe('MassService', () => {
  let service: MassesServiceInterface;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [massesServiceProvider],
    }).compile();

    service = module.get<MassesServiceInterface>(MassesServiceInterface);
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
