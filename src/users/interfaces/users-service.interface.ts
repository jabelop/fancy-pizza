import { User } from "./user.interface";
export interface UsersServiceInterface {
    findOne(username: string): Promise<User | undefined>;
}

export const UsersServiceInterface = Symbol("UsersServiceInterface");