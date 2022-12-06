import { Controller, Get, Inject, Param } from '@nestjs/common';
import { SizesServiceInterface } from './interfaces/sizes-service.interface';
import { Size } from './interfaces/size.interface';

@Controller('size')
export class SizesController {
    constructor(@Inject(SizesServiceInterface)private readonly sizesService: SizesServiceInterface) {}

  @Get()
  getAllMasses(): Promise<Size[]> {
    return this.sizesService.findAll();
  }

  @Get(':id')
  getMass(@Param('id') id: string): Promise<Size | undefined> {
    return this.sizesService.findOne(id);
  }
}
