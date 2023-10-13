import authentication from '../../../auth/authentication';
import express from 'express';
import validator from '../../../helpers/validator';
import schema from './schema';
import { createPost } from '../../../controllers/postController';

const router = express.Router();

router.use('/', authentication);

router.post('/', validator(schema.createPost), createPost);

export default router;
