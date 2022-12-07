import { User } from "src/users/interfaces/user.interface";
import { Pizza } from "./pizza.interface";

export interface Order {
    id?: string;
    pizzas: Pizza[],
    userId: number
}