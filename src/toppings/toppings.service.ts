import { Injectable } from '@nestjs/common';
import { Topping } from './interfaces/topping.interface';
import { ToppingsServiceInterface } from './interfaces/toppings-service.interface';

@Injectable()
export class ToppingsService implements ToppingsServiceInterface {
    private readonly toppings: Topping[] = [
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
    ];

    async findOne(id: string): Promise<Topping | undefined> {
        return this.toppings.find(size => size.id === id);
    }

    async findAll(): Promise<Topping[]> {
        return this.toppings;
    }
}
