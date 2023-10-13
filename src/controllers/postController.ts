import { ProtectedRequest } from 'app-request';
import { Response } from 'express';
import { SuccessResponse } from '../core/ApiResponse';
import PostRepos from '../database/repository/PostRepos';
import asyncHandler from '../helpers/asyncHandler';

export const createPost = asyncHandler(async (req: ProtectedRequest, res: Response) => {
  const createdPost = await PostRepos.create(req.body);
  new SuccessResponse('Post is Created successfully', createdPost).send(res);
});
