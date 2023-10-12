import express from 'express';
import validator, { ValidationSource } from '../../../helpers/validator';
import schema from './schema';
import { login, logout, refreshToken, signup } from '../../../controllers/authController';
import authentication from '../../../auth/authentication';

const router = express.Router();

router.post('/login', validator(schema.userCredential), login);

router.post('/signup', validator(schema.signup), signup);

router.use('/', authentication);

router.post(
  '/refresh',
  validator(schema.auth, ValidationSource.HEADER),
  validator(schema.refreshToken),
  refreshToken,
);

router.delete('/logout', logout);

export default router;
