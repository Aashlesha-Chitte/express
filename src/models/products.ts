import * as mongoose from 'mongoose';

interface IProductsModel extends mongoose.Document {
    name: string;
    quantity: number;
    price: number;
    state: string;
}

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter a product name']
    },
    quantity: {
        type: Number,
        required: true,
        default: 0
    },
    price: {
        type: Number,
        required: true,
    },
    state: {
        type: String,
        required: false,
    }
},
{
    timestamps: true
});


const Product: mongoose.Model<IProductsModel> = mongoose.model<IProductsModel>('Product', productSchema, 'Product');

export default Product;