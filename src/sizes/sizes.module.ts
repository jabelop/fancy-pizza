import { Module } from '@nestjs/common';
import { SizesServiceInterface } from './interfaces/sizes-service.interface';
import { SizesController } from './sizes.controller';
import { SizesService } from './sizes.service';

const sizeServiceProvider = {provide: SizesServiceInterface, useClass: SizesService};

@Module({
  imports: [],
  controllers: [SizesController],
  providers: [sizeServiceProvider]
})
export class SizesModule {}
