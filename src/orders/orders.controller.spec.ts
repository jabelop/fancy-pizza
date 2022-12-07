import { Test, TestingModule } from '@nestjs/testing';
import { JwtStrategy } from 'src/auth/strategies/jwt-strategy';
import { MassesServiceInterface } from 'src/masses/interfaces/masses-service.interface';
import { MassesService } from 'src/masses/masses.service';
import { SizesServiceInterface } from 'src/sizes/interfaces/sizes-service.interface';
import { SizesService } from 'src/sizes/sizes.service';
import { ToppingsServiceInterface } from 'src/toppings/interfaces/toppings-service.interface';
import { ToppingsService } from 'src/toppings/toppings.service';
import { OrderValidatorInterface } from './interfaces/order-validator.interface';
import { OrdersServiceInterface } from './interfaces/orders-service.interface';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { OrderValidator } from './validators/order.validator';

const ordersServiceProvider = { provide: OrdersServiceInterface, useClass: OrdersService };
const sizesServiceProvider = { provide: SizesServiceInterface, useClass: SizesService };
const massesServiceProvider = { provide: MassesServiceInterface, useClass: MassesService };
const toppingsServiceProvider = { provide: ToppingsServiceInterface, useClass: ToppingsService };
const orderValidatorProvider = { provide: OrderValidatorInterface, useClass: OrderValidator };

describe('OrdersController', () => {
  let controller: OrdersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrdersController],
      providers: [
        ordersServiceProvider,
        sizesServiceProvider,
        massesServiceProvider,
        toppingsServiceProvider,
        orderValidatorProvider,
        JwtStrategy
      ]
    }).compile();

    controller = module.get<OrdersController>(OrdersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
