import { NextFunction, Request, Response } from 'express';
import { productService } from '../../services';

class ProductController {
  public static getInstance(): ProductController {
    if (!ProductController.instance) {
      ProductController.instance = new ProductController();
    }
    return ProductController.instance;
  }
  private static instance: ProductController;

  public createProducts = async (req: Request, res: Response, next: NextFunction) => {
    return productService.createProducts(req, res, next);
  };

  public getProducts = async (req: Request, res: Response, next: NextFunction) => {
    return productService.getProducts(req, res, next);
  };

  public updateProducts = async (req: Request, res: Response, next: NextFunction) => {
    return productService.updateProducts(req, res, next);
  };
  public deleteProducts = async (req: Request, res: Response, next: NextFunction) => {
    return productService.deleteProducts(req, res, next);
  };

}

export default ProductController.getInstance();
