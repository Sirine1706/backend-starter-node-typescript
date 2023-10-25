import authentication from '../../../auth/authentication';
import express from 'express';
import validator, { ValidationSource } from '../../../helpers/validator';
import schema from './schema';
import {
  createPost,
  deletePost,
  getAllPosts,
  getPost,
  updatePost,
} from '../../../controllers/postController';
import { checkPost } from '../../../middlewares/post';

const router = express.Router();
router.get('/all', getAllPosts);

router.get('/:id', validator(schema.postID, ValidationSource.PARAM), checkPost, getPost);

router.use('/', authentication);

router.post('/', validator(schema.createPost), createPost);
router.patch(
  '/:id',
  validator(schema.postID, ValidationSource.PARAM),
  validator(schema.updatePost),
  updatePost,
);
router.delete('/:id', validator(schema.postID, ValidationSource.PARAM),checkPost, deletePost);

export default router;
