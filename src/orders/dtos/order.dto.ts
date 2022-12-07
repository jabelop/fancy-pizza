import { Pizza } from "../interfaces/pizza.interface";

export class OrderDTO {
    readonly id?: string;
    readonly pizzas: Pizza[];
    readonly userId: number;
  }