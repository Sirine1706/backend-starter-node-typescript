import { Types } from 'mongoose';
import { Post, PostModel } from '../model/Post';

export default class PostRepos {
  public static async create(post: Post, author: Types.ObjectId): Promise<Post> {
    const now = new Date();
    post.createdAt = post.updatedAt = now;
    const createdPost = await PostModel.create({ ...post, author });
    return await createdPost.populate({ path: 'author', select: '-verified -status' });
  }
  public static findByUrl(url: string): Promise<Post | null> {
    //lean option tells Mongoose to skip instantiating a full Mongoose document
    // exec() function returns a promise
    return PostModel.findOne({ url, deletedAt: null })
      .populate({ path: 'author', select: '-verified -status' })
      .lean<Post>()
      .exec();
  }
  public static findById(id: Types.ObjectId): Promise<Post | null> {
    return PostModel.findById(id)
      .populate({ path: 'author', select: '-verified -status' })
      .lean<Post>()
      .exec();
  }
  public static async update(post: Post): Promise<Post | null> {
    post.updatedAt = new Date();
    const updatedPost = await PostModel.findByIdAndUpdate(post._id, post, { new: true })
      .lean()
      .exec();
    return updatedPost;
  }
}
