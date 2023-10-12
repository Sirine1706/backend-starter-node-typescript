import { Request, Response } from 'express';
import PostRepos from '../database/repository/PostRepos';
import asyncHandler from '../helpers/asyncHandler';

export const createPost = asyncHandler(async (req: Request, res: Response) => {
  const createdPost = PostRepos.create(req.body);
});
