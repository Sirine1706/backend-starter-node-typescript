import { Post } from '../model/Post';

export default class PostRepos {
  public static async create(post: Post): Promise<Post> {
    const now = new Date();
    post.createdAt = post.updatedAt = now;
    const createdPost = await PostRepos.create(post);
    return createdPost;
  }
}
