import { Body, Controller, Delete, Get, HttpException, HttpStatus, Inject, Param, Post, Put, Request, UseGuards } from '@nestjs/common';
import { MassesServiceInterface } from 'src/masses/interfaces/masses-service.interface';
import { SizesServiceInterface } from 'src/sizes/interfaces/sizes-service.interface';
import { ToppingsServiceInterface } from 'src/toppings/interfaces/toppings-service.interface';
import { OrderDTO } from './dtos/order.dto';
import { Order } from './interfaces/order.interface';
import { OrdersServiceInterface } from './interfaces/orders-service.interface';
import { OrderValidatorInterface } from './interfaces/order-validator.interface';
import { JwtAuthGuard } from 'src/auth/strategies/jwt-auth.guard';

@Controller('orders')
export class OrdersController {
    constructor(
        @Inject(OrdersServiceInterface) private readonly ordersService: OrdersServiceInterface,
        @Inject(SizesServiceInterface) private readonly sizesService: SizesServiceInterface,
        @Inject(MassesServiceInterface) private readonly massesService: MassesServiceInterface,
        @Inject(ToppingsServiceInterface) private readonly toppingsService: ToppingsServiceInterface,
        @Inject(OrderValidatorInterface) private readonly orderValidator: OrderValidatorInterface,
    ) { }

    @UseGuards(JwtAuthGuard)
    @Get()
    getAllOrders(): Promise<Order[]> {
        return this.ordersService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async getOrder(@Param('id') id: string): Promise<Order | undefined> {
        const order: Order = await this.ordersService.findOne(id);
        if (!order) throw new HttpException('No order with that id', HttpStatus.NOT_FOUND);
        return order;
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    async createOrder(@Body() orderDTO: OrderDTO, @Request() req): Promise<Order> {
        if (req.user.userId !== orderDTO.userId) throw new HttpException("Unauthorized", HttpStatus.UNAUTHORIZED);

        const validationResult: boolean =
            await this.orderValidator.validateOrder(
                orderDTO,
                this.sizesService,
                this.massesService,
                this.toppingsService
            );
        if (!validationResult) throw new HttpException('Invalid data', HttpStatus.BAD_REQUEST);
        return this.ordersService.createOrder(orderDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Put()
    async updateOrder(@Body() orderDTO: OrderDTO, @Request() req): Promise<Order> {

        const order: Order = await this.ordersService.findOne(orderDTO.id);
        if (req.user.userId !== order.userId) throw new HttpException("Unauthorized", HttpStatus.UNAUTHORIZED);

        const validationResult: boolean =
            await this.orderValidator.validateOrder(
                orderDTO,
                this.sizesService,
                this.massesService,
                this.toppingsService
            );
        if (!validationResult) throw new HttpException('Invalid data', HttpStatus.BAD_REQUEST);
        return this.ordersService.updateOrder(orderDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Delete()
    async deleteOrder(@Body() orderDTO: OrderDTO, @Request() req): Promise<boolean> {

        const order: Order = await this.ordersService.findOne(orderDTO.id);
        if (req.user.userId !== order.userId) throw new HttpException("Unauthorized", HttpStatus.UNAUTHORIZED);
        
        const result: boolean = await this.ordersService.deleteOrder(orderDTO.id);
        if (!result) throw new HttpException('No order with that id', HttpStatus.NOT_FOUND);
        return result;
    }
}
