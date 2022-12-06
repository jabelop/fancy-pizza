import { Controller, Get, Inject, Param } from '@nestjs/common';
import { MassServiceInterface } from './interfaces/mass-service.interface';
import { Mass } from './interfaces/mass.interface';

@Controller('mass')
export class MassController {
    constructor(@Inject(MassServiceInterface)private readonly massService: MassServiceInterface) {}

  @Get()
  getAllMasses(): Promise<Mass[]> {
    return this.massService.findAll();
  }

  @Get(':id')
  getMass(@Param('id') id: string): Promise<Mass | undefined> {
    return this.massService.findOne(id);
  }

}
