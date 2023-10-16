import { DataRequest, ProtectedDataRequest } from 'app-request';
import { NextFunction, Request, Response } from 'express';
import { Types } from 'mongoose';
import { ForbiddenResponse } from '../core/ApiResponse';
import { NotFoundError } from '../core/ApiError';
import PostRepos from '../database/repository/PostRepos';
import asyncHandler from '../helpers/asyncHandler';

export const checkPost = asyncHandler(async (req: DataRequest, res: Response, next) => {
  const isPostExist = await PostRepos.findById(new Types.ObjectId(req.params.id));
  if (!isPostExist) {
    return next(new NotFoundError('Post not found'));
  }
  req.post = isPostExist;
  next();
});
// when authentication is required
export const findPostWhenAuthenticated = asyncHandler(
  async (req: ProtectedDataRequest, res: Response, next) => {
    const isPostExist = await PostRepos.findById(new Types.ObjectId(req.params.id));
    if (!isPostExist) {
      return next(new NotFoundError('Post not found'));
    }
    req.post = isPostExist;
    next();
  },
);
export const isPostAuthor = asyncHandler(
  async (req: ProtectedDataRequest, res: Response, next: NextFunction) => {
    if (req.user._id.toString() !== req.post.author._id.toString()) {
      return next(new ForbiddenResponse('Your are not authorized to perform such an action'));
    }
    next();
  },
);
