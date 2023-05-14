import { Router } from 'express';
import UsersController from './usersController';
const route = Router();

route.route('/').post(
  UsersController.createUser,
);

route.route('/').get(
  UsersController.getUsers,
);

export default route;
