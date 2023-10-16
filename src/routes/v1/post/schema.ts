import Joi from '@hapi/joi';
import { JoiObjectId, JoiUrlEndpoint } from '../../../helpers/validator';

export default {
  createPost: Joi.object().keys({
    title: Joi.string().required(),
    url: JoiUrlEndpoint().required(),
  }),
  updatePost: Joi.object().keys({
    url: JoiUrlEndpoint().optional(),
    title: Joi.string().optional(),
  }),
  postID: Joi.object().keys({
    id: JoiObjectId().required(),
  }),
};
