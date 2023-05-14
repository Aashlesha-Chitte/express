import { checkSchema, validationResult } from 'express-validator';

const validationHandler = (validator: any) => {
    return [
        checkSchema(validator),
        (request: any, response: any, next: any) => {
            const error = validationResult(request);
            console.log(error);
            if (!error.isEmpty()) {
                next({
                    message: 'Bad Request',
                    status: 422,
                    error: error.array()
                });
            }
            next();
        }
    ];
};
export default validationHandler;