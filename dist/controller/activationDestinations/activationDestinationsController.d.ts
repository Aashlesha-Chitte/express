import { NextFunction, Request, Response } from 'express';
declare class ActivationDestinationsController {
    static getInstance(): ActivationDestinationsController;
    private static instance;
    getActivationDestinations: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
}
declare const _default: ActivationDestinationsController;
export default _default;
