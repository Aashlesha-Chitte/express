declare const validationHandler: (validator: any) => (import("express-validator/src/middlewares/schema").RunnableValidationChains<import("express-validator").ValidationChain> | ((request: any, response: any, next: any) => void))[];
export default validationHandler;
