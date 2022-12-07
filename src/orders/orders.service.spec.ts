import { Test, TestingModule } from '@nestjs/testing';
import { OrdersServiceInterface } from './interfaces/orders-service.interface';
import { OrdersService } from './orders.service';

const ordersServiceProvider = {provide: OrdersServiceInterface, useClass: OrdersService};

describe('OrdersService', () => {
  let service: OrdersServiceInterface;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ordersServiceProvider],
    }).compile();

    service = module.get<OrdersServiceInterface>(OrdersServiceInterface);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  
});
