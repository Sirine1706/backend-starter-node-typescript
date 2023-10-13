import { Post, PostModel } from '../model/Post';

export default class PostRepos {
  public static async create(post: Post): Promise<Post> {
    const now = new Date();
    post.createdAt = post.updatedAt = now;
    const createdPost = await PostModel.create(post);
    return createdPost;
  }
  public static findByUrl(url: string): Promise<Post | null> {
    //lean option tells Mongoose to skip instantiating a full Mongoose document
    // exec() function returns a promise
    return PostModel.findOne({ url }).lean<Post>().exec();
  }
}
