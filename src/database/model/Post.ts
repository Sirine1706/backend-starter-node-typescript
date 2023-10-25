import { model, Schema } from 'mongoose';
import { mongoosePagination, Pagination } from 'mongoose-paginate-ts';
import User from './User';

export interface Post extends Document {
  _id: string;
  title: string;
  url: string;
  author: User;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}
const schema = new Schema(
  {
    title: Schema.Types.String,
    url: { type: Schema.Types.String, trim: true },
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    createdAt: {
      type: Schema.Types.Date,
      required: true,
      select: false,
    },
    updatedAt: {
      type: Schema.Types.Date,
      required: true,
      select: false,
    },
    deleteAt: {
      type: Schema.Types.Date,
      select: false,
    },
  },
  {
    versionKey: false,
  },
);
schema.plugin(mongoosePagination);
export const PostModel = model<Post, Pagination<Post>>('Post', schema, 'posts');
