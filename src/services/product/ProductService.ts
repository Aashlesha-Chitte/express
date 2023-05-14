import { NextFunction, Request, Response } from 'express';

import Product from '../../models/products';

class ProductService {

  public static getInstance(): ProductService {
    if (!ProductService.instance) {
      ProductService.instance = new ProductService();
    }
    return ProductService.instance;
  }
  private static instance: ProductService;

  public async getProducts(req: Request, res: Response, next: NextFunction) {
    // const { logger }: any = req.headers;
    try {
      const products = await Product.find({});
      return res.send({ message: 'Success', status: 200, data: products });
    } catch (e) {
      console.log(`ProductService :: getProducts :: Error
      `, JSON.stringify(e));
      // return next(SystemResponse.internalServerError('Internal Error', e));
    }
  }

  public async createProducts(req: Request, res: Response, next: NextFunction) {
    try {
      const products = await Product.create(req.body);
      return res.send({ message: 'Success', status: 200, data: products });
    } catch (e) {
      console.log(`ProductService :: createProducts :: Error
      `, JSON.stringify(e));
    }
  }

  public async updateProducts(req: Request, res: Response, next: NextFunction) {
    try {
      const productId = req.params.id;
      const product = await Product.findById(productId);

      // we cannot find any product in database
      if (!product) {
        return res.status(404).json({ message: `cannot find any product with ID ${productId}` })
      }
      const updatedProduct = await Product.findByIdAndUpdate(productId, req.body);
      console.log('updatedProduct', updatedProduct);

      const updatedProductData = await Product.findById(productId)
      
      return res.send({ message: 'Success', status: 200, data: updatedProductData });
    } catch (e) {
      console.log(`ProductService :: updateProducts :: Error
      `, JSON.stringify(e));
    }
  }

  public async deleteProducts(req: Request, res: Response, next: NextFunction) {
    try {
      const productId = req.params.id;
      const product = await Product.findById(productId);
      if (!product) {
        return res.status(404).json({ message: `cannot find any product with ID ${productId}` })
      }
      await Product.findByIdAndDelete(productId);
      return res.send({ message: 'Success', status: 200 });
    } catch (e) {
      console.log(`ProductService :: deleteProducts :: Error
      `, JSON.stringify(e));
    }
  }

}

export default ProductService.getInstance();
