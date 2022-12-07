import { Order } from "./order.interface";

export interface OrdersServiceInterface {
    /**
     * find a order by its id
     * 
     * @param id the order id
     * 
     * @returns a Promise with the order if founded, undefined if not 
     */
     findOne(id: string): Promise<Order | undefined>;

     /**
      * find all stored orders
      * 
      * @returns a Promise with all the stored orders
      */
     findAll(): Promise<Order[]>;

     /**
      * create an order storing it along with the order data
      * 
      * @param order the order to create
      * 
      * @return a Promise with the created order
      */
     createOrder(order: Order): Promise<Order>;
     
     /**
      * update an order
      * 
      * @param order the order to update
      * 
      * @return a Promise with the updated order if the order exists, with undefined if not
      */
      updateOrder(order: Order): Promise<Order>;

      /**
      * delete an order
      * 
      * @param id the order id to delete
      * 
      * @return a Promise with true if the order was deleted, false if was not
      */
       deleteOrder(id: string): Promise<boolean>;
 }
 
 export const OrdersServiceInterface = Symbol("OrdersServiceInterface");