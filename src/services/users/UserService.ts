import { NextFunction, Request, Response } from 'express';

import User from '../../models/user';

class UserService {

    public static getInstance(): UserService {
        if (!UserService.instance) {
            UserService.instance = new UserService();
        }
        return UserService.instance;
    }
    private static instance: UserService;

    public async getUsers(req: Request, res: Response, next: NextFunction) {
        try {
            const users = await User.find({});
            console.log('data', users);
            // const usersData = await User.aggregate([{
            //     $group: {
            //         _id: '$name',
            //         role: {
            //           $push: '$role'
            //         }
            //       }
            // }]);

            const newArray: any = [];

            users?.forEach((item) => {
                const { name, role } = item;
                const existingItem = newArray.find((element: any) => element.name === name);
                if (existingItem) {
                    existingItem.role.push(role);
                } else {
                    newArray.push({ name, role: [role] });
                }
            });

            const updatedArray = newArray.map((obj: any) => ({
                name: obj.name,
                role: obj.role.length > 1 ? obj.role.join(', ') : obj.role[0]
            }));

            return res.send({ message: 'Success', status: 200, data: updatedArray });
        } catch (e) {
            console.log(`UserService :: getUsers :: Error
      `, JSON.stringify(e));
        }
    }

    public async createUser(req: Request, res: Response, next: NextFunction) {
        try {
            const user = await User.create(req.body);
            return res.send({ message: 'Success', status: 200, data: user });
        } catch (e) {
            console.log(`UserService :: createUser :: Error
      `, JSON.stringify(e));
        }
    }
}

export default UserService.getInstance();
