import * as mongoose from 'mongoose';
interface IProductsModel extends mongoose.Document {
    name: string;
    quantity: number;
    price: number;
    state: string;
}
declare const Product: mongoose.Model<IProductsModel>;
export default Product;
