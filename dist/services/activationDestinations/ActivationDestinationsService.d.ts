import { NextFunction, Request, Response } from 'express';
declare class ProductService {
    static getInstance(): ProductService;
    private static instance;
    getActivationDestinations(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
}
declare const _default: ProductService;
export default _default;
