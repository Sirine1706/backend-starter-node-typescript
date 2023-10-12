import { model, Schema } from 'mongoose';
import { mongoosePagination, Pagination } from 'mongoose-paginate-ts';

export interface Post extends Document {
  title: string;
  url: string;
  author: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}
const schema = new Schema(
  {
    title: Schema.Types.String,
    url: { type: Schema.Types.String, unique: true, trim: true },
    createdAt: {
      type: Schema.Types.Date,
      required: true,
      select: false,
    },
    updateAt: {
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
