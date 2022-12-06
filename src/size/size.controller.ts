import { Controller, Get, Inject, Param } from '@nestjs/common';
import { SizeServiceInterface } from './interfaces/size-service.interface';
import { Size } from './interfaces/size.interface';

@Controller('size')
export class SizeController {
    constructor(@Inject(SizeServiceInterface)private readonly massService: SizeServiceInterface) {}

  @Get()
  getAllMasses(): Promise<Size[]> {
    return this.massService.findAll();
  }

  @Get(':id')
  getMass(@Param('id') id: string): Promise<Size | undefined> {
    return this.massService.findOne(id);
  }
}
