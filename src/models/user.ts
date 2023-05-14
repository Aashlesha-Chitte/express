import * as mongoose from 'mongoose';

interface IUsersModel extends mongoose.Document {
    name: string;
    role: string;
}

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter a user name']
    },
    role: {
        type: String,
        required: false,
    }
},
{
    timestamps: true
});


const User: mongoose.Model<IUsersModel> = mongoose.model<IUsersModel>('User', userSchema, 'User');

export default User;