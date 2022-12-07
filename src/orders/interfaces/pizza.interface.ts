import { Mass } from "src/masses/interfaces/mass.interface";
import { Size } from "src/sizes/interfaces/size.interface";
import { Topping } from "src/toppings/interfaces/topping.interface";

export interface Pizza {
    sizeId: string;
    massId: string;
    toppingsId: string[];
}