import express from 'express';
import role from '../../../helpers/role';
import authentication from '../../../auth/authentication';
import authorization from '../../../auth/authorization';
import { RoleCode } from '../../../database/model/Role';
import { deleteUser, getAllUsers } from '../../../controllers/userController';
import validator, { ValidationSource } from '../../../helpers/validator';
import schema from './schema';

const router = express.Router();

router.use('/', authentication, role(RoleCode.ADMIN), authorization);

router.get('/all',
   getAllUsers  
)

router.delete('/:id',
   validator(schema.userId, ValidationSource.PARAM),
   deleteUser  
)
export default router;