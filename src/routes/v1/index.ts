import express from 'express';
import access from './access/access';
import profile from './user/profile';
import users from './user/user';
import posts from './post/post';

const router = express.Router();

router.use('/posts', posts);
router.use('/', access);
router.use('/profile', profile);
router.use('/users', users);

export default router;
