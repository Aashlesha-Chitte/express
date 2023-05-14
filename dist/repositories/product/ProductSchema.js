"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = __importStar(require("mongoose"));
const VersionableSchema_1 = __importDefault(require("../versionable/VersionableSchema"));
class ProductsSchema extends VersionableSchema_1.default {
    constructor(collections) {
        const variantsSchema = new mongoose.Schema({
            _id: String,
            barcode: String,
            sku: String,
            price: Number,
            comparePrice: Number,
            option1: String,
            option1Val: String,
            option2: String,
            option2Val: String,
            option3: String,
            option3Val: String,
            imageUrl: String,
            fulfillmentService: String,
            inventoryPolicy: String,
            inventoryQuantity: Number,
            inventoryTracker: String,
            weightUnit: String,
            isShipping: Boolean,
            isTaxable: Boolean,
            grams: Number,
            taxCode: String
        });
        const imagesSchema = new mongoose.Schema({
            _id: String,
            imageUrl: String,
            imagePosition: Number,
            imageAltText: String,
        });
        const baseSchema = {
            _id: String,
            handle: String,
            title: String,
            bodyHtml: String,
            vendor: String,
            published: Boolean,
            tags: Array,
            status: String,
            giftCard: Boolean,
            costPerItem: Number,
            variants: [variantsSchema],
            images: [imagesSchema],
            googleShoping: {
                productCategory: String,
                gender: String,
                ageGroup: String,
                mpn: String,
                adwordsGrouping: String,
                adwordsLables: Array,
                condition: String,
                customProduct: Boolean,
                customLabel0: String,
                customLabel1: String,
                customLabel2: String,
                customLabel3: String,
                customLabel4: String,
            },
            seo: {
                seoTitle: String,
                seoDescription: String,
            },
            standardProductType: String,
            customProductType: String,
        };
        super(baseSchema, collections);
    }
}
exports.default = ProductsSchema;
//# sourceMappingURL=ProductSchema.js.map