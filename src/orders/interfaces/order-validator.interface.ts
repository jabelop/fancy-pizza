import { MassesServiceInterface } from "src/masses/interfaces/masses-service.interface";
import { SizesServiceInterface } from "src/sizes/interfaces/sizes-service.interface";
import { ToppingsServiceInterface } from "src/toppings/interfaces/toppings-service.interface";
import { OrderDTO } from "../dtos/order.dto";

export interface OrderValidatorInterface {
    /**
     * validate an order
     * 
     * @param order the order to validate
     * @param sizesService the sizes service
     * @param massService the masses service
     * @param toppingsService the toppings service
     */
    validateOrder(
        order: OrderDTO, 
        sizesService: SizesServiceInterface, 
        massesService: MassesServiceInterface, 
        toppingsService: ToppingsServiceInterface
    ): Promise<boolean>;
}

export const OrderValidatorInterface = Symbol("OrderValidatorInterface");