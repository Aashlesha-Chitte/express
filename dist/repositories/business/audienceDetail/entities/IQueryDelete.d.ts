import * as mongoose from 'mongoose';
import { IQueryBaseDelete } from '../../../entities';
export default interface IQueryDelete extends IQueryBaseDelete {
    id?: string;
    audienceId?: mongoose.Types.ObjectId;
    isDeleted?: boolean;
}
