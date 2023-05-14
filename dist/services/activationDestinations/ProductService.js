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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const products_1 = __importDefault(require("../../models/products"));
//  global Repositories
// import ActivationDestinationsRepository from '../../repositories/business/activationDestinations/repository';
// import ActivationPartnerRepository from 'globalRepositories/business/activationPartners/repository';
// import { generateObjectId, groupBy } from 'libs/utilities';
// import * as _ from 'lodash';
// import { referenceDataService } from 'services';
class ProductService {
    static getInstance() {
        if (!ProductService.instance) {
            ProductService.instance = new ProductService();
        }
        return ProductService.instance;
    }
    getActivationDestinations(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            // const { logger }: any = req.headers;
            try {
                const products = yield products_1.default.find({});
                return res.send({ message: 'Success', status: 200, data: products });
            }
            catch (e) {
                console.log(`ProductService :: getActivationDestinations :: Error
      `, JSON.stringify(e));
                // return next(SystemResponse.internalServerError('Internal Error', e));
            }
        });
    }
}
exports.default = ProductService.getInstance();
//# sourceMappingURL=ProductService.js.map