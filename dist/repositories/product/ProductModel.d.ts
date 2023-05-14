import * as mongoose from 'mongoose';
import ProductSchema from './ProductSchema';
import IProductModel from './IProductModel';
export declare const productSchema: ProductSchema;
export declare const productModel: mongoose.Model<IProductModel>;
