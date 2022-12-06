import { Test, TestingModule } from '@nestjs/testing';
import { SizesServiceInterface } from './interfaces/sizes-service.interface';
import { Size } from './interfaces/size.interface';
import { SizesService } from './sizes.service';

const sizesServiceProvider = {provide: SizesServiceInterface, useClass: SizesService};

describe('SizesService', () => {
  let service: SizesServiceInterface;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [sizesServiceProvider],
    }).compile();

    service = module.get<SizesServiceInterface>(SizesServiceInterface);
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

  it('Should return the third stored size', async () => {
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
