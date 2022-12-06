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
            price: 2
          },
          {
            id: "2",
            name: 'Feta-type Cheese',
            price: 2
          },
          {
            id: "3",
            name: 'Cheddar Cheese',
            price: 2
          },
          {
            id: "4",
            name: 'Parmesan Type Cheese',
            price: 2
          },
          {
            id: "5",
            name: 'Sweet Corn',
            price: 2
          },
          {
            id: "6",
            name: 'Jalapeño Peppers',
            price: 2
          },
          {
            id: "7",
            name: 'Fresh Mushrooms',
            price: 3
          },
          {
            id: "8",
            name: 'Fresh Peppers',
            price: 3
          },
          {
            id: "9",
            name: 'Fresh Tomato',
            price: 3
          },
          {
            id: "10",
            name: 'Black Olives',
            price: 3
          },
          {
            id: "11",
            name: 'Caramelized Onion',
            price: 3
          },
          {
            id: "12",
            name: 'Purple Onion',
            price: 3
          },
          {
            id: "13",
            name: 'Crispy Onion',
            price: 3
          },
          {
            id: "14",
            name: 'Beef',
            price: 4
          },
          {
            id: "15",
            name: 'Grilled Chicken',
            price: 4
          },
          {
            id: "16",
            name: 'Ham',
            price: 4
          },
          {
            id: "17",
            name: 'Bacon',
            price: 4
          },
          {
            id: "18",
            name: 'Pepperoni',
            price: 4
          },
          {
            id: "19",
            name: 'Tuna',
            price: 4
          },
          {
            id: "20",
            name: 'Chicken with spices',
            price: 4
          }
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
          price: 3
        }
      ));
  });

  it('Should return undefined', async () => {
    const topping: Topping = await service.findOne("40");
    expect(topping)
      .toEqual(undefined);
  });
});
