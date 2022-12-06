import { Module } from '@nestjs/common';
import { ToppingsServiceInterface } from './interfaces/toppings-service.interface';
import { ToppingsController } from './toppings.controller';
import { ToppingsService } from './toppings.service';

const toppingsServiceProvider = {provide: ToppingsServiceInterface, useClass: ToppingsService};

@Module({
  controllers: [ToppingsController],
  providers: [toppingsServiceProvider]
})
export class ToppingsModule {}
