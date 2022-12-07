import { Injectable } from '@nestjs/common';
import { Debug } from 'src/helper/debug.helper';
import { Order } from './interfaces/order.interface';
import { OrdersServiceInterface } from './interfaces/orders-service.interface';

@Injectable()
export class OrdersService implements OrdersServiceInterface {
    
    private readonly orders: Order[] = [
        {
            id: "1",
            pizzas: [{
                sizeId: "2",
                massId:"2",
                toppingsId: ["8","15"]

            }],
            userId: 1
        },
        {
            id: "2",
            pizzas: [{
                sizeId: "2",
                massId: "1",
                toppingsId: ["8","18","19"]

            }],
            userId: 1
        },
        {
            id: "3",
            pizzas: [
                {
                    sizeId: "3",
                    massId: "1",
                    toppingsId: ["8","18","19"]

                },
                {
                    sizeId: "3",
                    massId: "3",
                    toppingsId: ["17", "3", "19"]

                }
            ],
            userId: 2
        },
    ];

    async findOne(id: string): Promise<Order | undefined> {
        return this.orders.find(size => size.id === id);
    }

    async findAll(): Promise<Order[]> {
        return this.orders;
    }

    async createOrder(order: Order): Promise<Order> {
        const id: string = "" + (this.orders.length + 1);
        order.id = id;
        this.orders.push(order);
        return order;
    }

    async updateOrder(order: Order): Promise<Order | undefined> {
        const storedOrder: Order = this.orders.find(storedOrder => storedOrder.id === order.id);
        
        if (!storedOrder) return undefined;

        storedOrder.pizzas = order.pizzas;
        return storedOrder;
    }

    async deleteOrder(id: string): Promise<boolean> {
        const orderIndex: number = this.orders.findIndex((order: Order) => order.id === id);
        if (orderIndex < 0 ) return false;
        this.orders.splice(orderIndex, 1);
        return true;        
    }
    
}
