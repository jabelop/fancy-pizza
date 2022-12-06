import { Topping } from "./topping.interface";

export interface ToppingsServiceInterface {
    /**
     * find a topping by its id
     * 
     * @param id the topping id
     * 
     * @returns a Promise with the topping if founded, undefined if not 
     */
     findOne(id: string): Promise<Topping | undefined>;

     /**
      * find all stored toppings
      * 
      * @returns a Promise with all the stored toppings
      */
     findAll(): Promise<Topping[]>;
 }
 
 export const ToppingsServiceInterface = Symbol("ToppingsServiceInterface");