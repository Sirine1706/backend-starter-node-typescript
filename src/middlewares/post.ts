import { ProtectedRequest } from 'app-request';
import { Response } from 'express';
import { BadRequestError } from '../core/ApiError';
import PostRepos from '../database/repository/PostRepos';
import asyncHandler from '../helpers/asyncHandler';

export const findYourPost = asyncHandler((req: ProtectedRequest, res: Response, next) => {
  const isPostExist = PostRepos.findByUrl(req.body.url);
  if (isPostExist) {
    return new BadRequestError();
  } else {
    next();
  }
});
