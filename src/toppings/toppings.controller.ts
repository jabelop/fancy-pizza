import { Controller, Get, Inject, Param } from '@nestjs/common';
import { Topping } from './interfaces/topping.interface';
import { ToppingsServiceInterface } from './interfaces/toppings-service.interface';

@Controller('toppings')
export class ToppingsController {
    constructor(@Inject(ToppingsServiceInterface) private readonly toppingsService: ToppingsServiceInterface) { }

    @Get()
    getAllMasses(): Promise<Topping[]> {
        return this.toppingsService.findAll();
    }

    @Get(':id')
    getMass(@Param('id') id: string): Promise<Topping | undefined> {
        return this.toppingsService.findOne(id);
    }
}
