import { NextFunction, Request, Response } from 'express';
import { usersService } from '../../services';

class UsersController {
  public static getInstance(): UsersController {
    if (!UsersController.instance) {
      UsersController.instance = new UsersController();
    }
    return UsersController.instance;
  }
  private static instance: UsersController;

  public createUser = async (req: Request, res: Response, next: NextFunction) => {
    return usersService.createUser(req, res, next);
  };

  public getUsers = async (req: Request, res: Response, next: NextFunction) => {
    return usersService.getUsers(req, res, next);
  };

}

export default UsersController.getInstance();
