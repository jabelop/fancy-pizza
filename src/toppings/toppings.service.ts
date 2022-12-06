import { Injectable } from '@nestjs/common';
import { Topping } from './interfaces/topping.interface';
import { ToppingsServiceInterface } from './interfaces/toppings-service.interface';

@Injectable()
export class ToppingsService implements ToppingsServiceInterface{
    private readonly toppings: Topping[] = [
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
    ];

    async findOne(id: string): Promise<Topping | undefined> {
        return this.toppings.find(size => size.id === id);
    }

    async findAll(): Promise<Topping[]> {
        return this.toppings;
    }
}
