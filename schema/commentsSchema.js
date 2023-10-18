import Joi from "joi";
const commentsSchema = {
    add: Joi.object({
        userId: Joi.number().required(),
        text: Joi.string().required(),
        date: Joi.date().iso()
    }),
    update: Joi.object({
        id: Joi.number().required(),
        userId: Joi.number().required(),
        text: Joi.string().required(),
    }),
    delete: Joi.object({
        id: Joi.number().required()
    }),
    getAll: Joi.object({
        page: Joi.string().required().default('1'),
        limit: Joi.string().required().default('3')
    })
}

export default commentsSchema
