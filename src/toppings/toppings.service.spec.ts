import { Test, TestingModule } from '@nestjs/testing';
import { Topping } from './interfaces/topping.interface';
import { ToppingsServiceInterface } from './interfaces/toppings-service.interface';
import { ToppingsService } from './toppings.service';

const toppingsServiceProvider = { provide: ToppingsServiceInterface, useClass: ToppingsService };

describe('ToppingsService', () => {
  let service: ToppingsServiceInterface;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [toppingsServiceProvider],
    }).compile();

    service = module.get<ToppingsServiceInterface>(ToppingsServiceInterface);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('Should return all the stored toppings', async () => {
    const toppings: Topping[] = await service.findAll();
    expect(JSON.stringify(toppings))
      .toEqual(JSON.stringify(
        [
          {
            id: "1",
            name: 'Pineapple',
          },
          {
            id: "2",
            name: 'Feta-type Cheese',
          },
          {
            id: "3",
            name: 'Cheddar Cheese',
          },
          {
            id: "4",
            name: 'Parmesan Type Cheese',
          },
          {
            id: "5",
            name: 'Sweet Corn',
          },
          {
            id: "6",
            name: 'Jalapeño Peppers',
          },
          {
            id: "7",
            name: 'Fresh Mushrooms',
          },
          {
            id: "8",
            name: 'Fresh Peppers',
          },
          {
            id: "9",
            name: 'Fresh Tomato',
          },
          {
            id: "10",
            name: 'Black Olives',
          },
          {
            id: "11",
            name: 'Caramelized Onion',
          },
          {
            id: "12",
            name: 'Purple Onion',
          },
          {
            id: "13",
            name: 'Crispy Onion',
          },
          {
            id: "14",
            name: 'Beef',
          },
          {
            id: "15",
            name: 'Grilled Chicken',
          },
          {
            id: "16",
            name: 'Ham',
          },
          {
            id: "17",
            name: 'Bacon',
          },
          {
            id: "18",
            name: 'Pepperoni',
          },
          {
            id: "19",
            name: 'Tuna',
          },
          {
            id: "20",
            name: 'Chicken with spices',
          },
        ]
      ));
  });

  it('Should return the tenth stored topping', async () => {
    const topping: Topping = await service.findOne("10");
    expect(JSON.stringify(topping))
      .toEqual(JSON.stringify(
        {
          id: "10",
          name: 'Black Olives',
        }
      ));
  });

  it('Should return undefined', async () => {
    const topping: Topping = await service.findOne("40");
    expect(topping)
      .toEqual(undefined);
  });
});
