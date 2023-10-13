import Joi from '@hapi/joi';

export default {
  createPost: Joi.object().keys({
    title: Joi.string().required(),
    url: Joi.string().uri().required(),
  }),
};
