import { Size } from "./size.interface";

export interface SizeServiceInterface {
    /**
     * find a size by its id
     * 
     * @param id the size id
     * 
     * @returns a Promise with the size if founded, undefined if not 
     */
     findOne(id: string): Promise<Size | undefined>;

     /**
      * find all stored sizes
      * 
      * @returns a Promise with all the stored sizes
      */
     findAll(): Promise<Size[]>;
 }
 
 export const SizeServiceInterface = Symbol("SizeServiceInterface");