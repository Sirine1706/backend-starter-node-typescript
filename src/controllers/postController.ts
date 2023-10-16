import { DataRequest, ProtectedDataRequest, ProtectedRequest } from 'app-request';
import { Response } from 'express';
import _ from 'lodash';
import { Types } from 'mongoose';
import { SuccessResponse } from '../core/ApiResponse';
import PostRepos from '../database/repository/PostRepos';
import asyncHandler from '../helpers/asyncHandler';

export const createPost = asyncHandler(async (req: ProtectedRequest, res: Response) => {
  const createdPost = await PostRepos.create(req.body, new Types.ObjectId(req.user._id));
  new SuccessResponse(
    'Post is Created successfully',
    _.pick(createdPost, ['_id', 'title', 'url', 'createdAt', 'author']),
  ).send(res);
});
export const getPost = asyncHandler(async (req: DataRequest, res: Response) => {
  const post = req.post;
  return new SuccessResponse(
    'success',
    _.pick(post, ['_id', 'title', 'url', 'createdAt', 'author']),
  ).send(res);
});
export const updatePost = asyncHandler(async (req: ProtectedDataRequest, res: Response) => {
  if (req.body.title) req.post.title = req.body.title;
  if (req.body.url) req.post.url = req.body.url;
  const updatedPost = await PostRepos.update(req.post);

  return new SuccessResponse('this post is updated successfully', updatedPost).send(res);
});
