import { NextFunction, Request, Response } from 'express';
declare class UserService {
    static getInstance(): UserService;
    private static instance;
    getUsers(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
    createUser(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
}
declare const _default: UserService;
export default _default;
