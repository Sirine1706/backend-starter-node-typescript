import authentication from '../../../auth/authentication';
import express from 'express';
import validator, { ValidationSource } from '../../../helpers/validator';
import schema from './schema';
import { createPost, getPost, updatePost } from '../../../controllers/postController';
import { checkPost } from '../../../middlewares/post';

const router = express.Router();

router.use(':id', validator(schema.postID, ValidationSource.PARAM));

router.get('/:id', checkPost, getPost);

router.use('/', authentication);

router.post('/', validator(schema.createPost), createPost);

router.patch('/:id', validator(schema.updatePost), updatePost);

export default router;
