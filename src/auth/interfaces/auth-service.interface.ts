
export interface AuthServiceInterface {
    validateUser(username: string, pass: string): Promise<any>;
    login(user: any): Promise<any>
}

export const AuthServiceInterface = Symbol("AuthServiceInterface");