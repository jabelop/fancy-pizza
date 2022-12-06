import { Module } from '@nestjs/common';
import { SizeServiceInterface } from './interfaces/size-service.interface';
import { SizeController } from './size.controller';
import { SizeService } from './size.service';

const sizeServiceProvider = {provide: SizeServiceInterface, useClass: SizeService};

@Module({
  imports: [],
  controllers: [SizeController],
  providers: [sizeServiceProvider]
})
export class SizeModule {}
