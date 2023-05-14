import * as mongoose from 'mongoose';
interface IUsersModel extends mongoose.Document {
    name: string;
    role: string;
}
declare const User: mongoose.Model<IUsersModel>;
export default User;
