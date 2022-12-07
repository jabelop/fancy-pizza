import { Injectable } from "@nestjs/common";
import { Debug } from "src/helper/debug.helper";
import { Mass } from "src/masses/interfaces/mass.interface";
import { MassesServiceInterface } from "src/masses/interfaces/masses-service.interface";
import { Size } from "src/sizes/interfaces/size.interface";
import { SizesServiceInterface } from "src/sizes/interfaces/sizes-service.interface";
import { Topping } from "src/toppings/interfaces/topping.interface";
import { ToppingsServiceInterface } from "src/toppings/interfaces/toppings-service.interface";
import { OrderDTO } from "../dtos/order.dto";
import { OrderValidatorInterface } from "../interfaces/order-validator.interface";

@Injectable()
export class OrderValidator implements OrderValidatorInterface {
    async validateOrder(order: OrderDTO, sizesService: SizesServiceInterface, massesService: MassesServiceInterface, toppingsService: ToppingsServiceInterface): Promise<boolean> {

        for (let pizza of order.pizzas) {
            
            const size: Size = await sizesService.findOne(pizza.sizeId);
            if (!size) return false;
            
            const mass: Mass = await massesService.findOne(pizza.massId);
            if(!mass) return false;
            
            const validToppings: boolean = await this.validateToppings(pizza.toppingsId, toppingsService);
            if (!validToppings) return false;
            
        }
        return true;
    }

    /**
     * validate pizza toppings
     * 
     * @param toppings_id the pizza toppings id
     * @param toppingsService the toppings service
     * 
     * @returns a Promise with true if the toppings are valid false if not
     */
     async validateToppings(toppings_id: string[], toppingsService: ToppingsServiceInterface): Promise<boolean> {
        for (const topping_id of toppings_id) {
            const storedTopping: Topping = await toppingsService.findOne(topping_id);
            if (!storedTopping) return false;
        }
        return true;
    }
    
}