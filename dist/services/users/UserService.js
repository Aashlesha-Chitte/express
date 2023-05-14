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
const user_1 = __importDefault(require("../../models/user"));
class UserService {
    static getInstance() {
        if (!UserService.instance) {
            UserService.instance = new UserService();
        }
        return UserService.instance;
    }
    getUsers(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield user_1.default.find({});
                console.log('data', users);
                // const usersData = await User.aggregate([{
                //     $group: {
                //         _id: '$name',
                //         role: {
                //           $push: '$role'
                //         }
                //       }
                // }]);
                const newArray = [];
                users === null || users === void 0 ? void 0 : users.forEach((item) => {
                    const { name, role } = item;
                    const existingItem = newArray.find((element) => element.name === name);
                    if (existingItem) {
                        existingItem.role.push(role);
                    }
                    else {
                        newArray.push({ name, role: [role] });
                    }
                });
                const updatedArray = newArray.map((obj) => ({
                    name: obj.name,
                    role: obj.role.length > 1 ? obj.role.join(', ') : obj.role[0]
                }));
                return res.send({ message: 'Success', status: 200, data: updatedArray });
            }
            catch (e) {
                console.log(`UserService :: getUsers :: Error
      `, JSON.stringify(e));
            }
        });
    }
    createUser(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield user_1.default.create(req.body);
                return res.send({ message: 'Success', status: 200, data: user });
            }
            catch (e) {
                console.log(`UserService :: createUser :: Error
      `, JSON.stringify(e));
            }
        });
    }
}
exports.default = UserService.getInstance();
//# sourceMappingURL=UserService.js.map