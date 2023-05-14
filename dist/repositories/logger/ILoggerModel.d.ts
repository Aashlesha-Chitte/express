import * as Mongoose from 'mongoose';
export default interface ILoggerModel extends Mongoose.Document {
    fileName: string;
    handle: string;
    date: string;
    time: string;
    error: string;
}
