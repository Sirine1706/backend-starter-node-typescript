import Joi from '@hapi/joi';
import { JoiObjectId, JoiUrlEndpoint } from '../../../helpers/validator';

export default {
  createPost: Joi.object().keys({
    title: Joi.string().required(),
    url: Joi.string().uri().required(),
  }),
  updatePost: Joi.object().keys({
    url:Joi.string().uri().optional(),
    title: Joi.string().optional(),
  }),
  postID: Joi.object().keys({
    id: JoiObjectId().required(),
  }),
};
