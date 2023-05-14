import { NextFunction, Request, Response } from 'express';
declare class UsersController {
    static getInstance(): UsersController;
    private static instance;
    createUser: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
    getUsers: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
}
declare const _default: UsersController;
export default _default;
