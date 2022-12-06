import { Controller, Get, Inject, Param } from '@nestjs/common';
import { MassesServiceInterface } from './interfaces/masses-service.interface';
import { Mass } from './interfaces/mass.interface';

@Controller('mass')
export class MassesController {
    constructor(@Inject(MassesServiceInterface)private readonly massesService: MassesServiceInterface) {}

  @Get()
  getAllMasses(): Promise<Mass[]> {
    return this.massesService.findAll();
  }

  @Get(':id')
  getMass(@Param('id') id: string): Promise<Mass | undefined> {
    return this.massesService.findOne(id);
  }

}
