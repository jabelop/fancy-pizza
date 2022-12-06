import { Test, TestingModule } from '@nestjs/testing';
import { SizeServiceInterface } from './interfaces/size-service.interface';
import { Size } from './interfaces/size.interface';
import { SizeService } from './size.service';

const sizeServiceProvider = {provide: SizeServiceInterface, useClass: SizeService};

describe('SizeService', () => {
  let service: SizeServiceInterface;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [sizeServiceProvider],
    }).compile();

    service = module.get<SizeServiceInterface>(SizeServiceInterface);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('Should return all the stored sizes', async () => {
    const sizes: Size[] = await service.findAll();
    expect(JSON.stringify(sizes))
      .toEqual(JSON.stringify([
        {
            id: "1",
            size: 'small',
        },
        {
            id: "2",
            size: 'medium',
        },
        {
            id: "3",
            size: 'large',
        },
    ]));
  });

  it('Should return the second stored mass', async () => {
    const size: Size = await service.findOne("3");
    expect(JSON.stringify(size))
      .toEqual(JSON.stringify(
        {
          id: "3",
          size: 'large',
        }));
  });

  it('Should return undefined', async () => {
    const size: Size = await service.findOne("6");
    expect(size)
      .toEqual(undefined);
  });

});
