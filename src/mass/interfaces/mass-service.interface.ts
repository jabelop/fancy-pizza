import { Mass } from "./mass.interface";

export interface MassServiceInterface {

    /**
     * find a mass by its id
     * 
     * @param id the mass id
     * 
     * @returns a Promise with the mass if founded, undefined if not 
     */
    findOne(id: string): Promise<Mass | undefined>;

    /**
     * find all stored masses
     * 
     * @returns a Promise with all the stored masses
     */
    findAll(): Promise<Mass[]>;
}

export const MassServiceInterface = Symbol("MassServiceInterface");