"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = require("../../services");
class ActivationDestinationsController {
    constructor() {
        // public createActivationDestinations = async (req: Request, res: Response, next: NextFunction) => {
        //   return activationDestinationsService.createActivationDestinations(req, res, next);
        // };
        this.getActivationDestinations = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            return services_1.activationDestinationsService.getActivationDestinations(req, res, next);
        });
        // public updateDestinationConfig = async (req: Request, res: Response, next: NextFunction) => {
        //   return activationDestinationsService.updateDestinationConfig(req, res, next);
        // };
    }
    static getInstance() {
        if (!ActivationDestinationsController.instance) {
            ActivationDestinationsController.instance = new ActivationDestinationsController();
        }
        return ActivationDestinationsController.instance;
    }
}
exports.default = ActivationDestinationsController.getInstance();
//# sourceMappingURL=activationDestinationsController.js.map