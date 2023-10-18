import Joi from "joi";
const usersSchema = {
    create: Joi.object({
        firstName: Joi.string().alphanum().required(),
        lastName:Joi.string().alphanum().required(),
        email: Joi.string().email().required(),
        password:Joi.string().min(8).max(32).required(),
        token:Joi.string().alphanum(),
        avatar: Joi.string(),
        status:Joi.valid('active', 'deleted', 'pending').default('pending'),
        role:Joi.valid('admin','user').default('user')
    }),
    update: Joi.object({
        id: Joi.number().required(),
        firstName: Joi.string().alphanum().required(),
        lastName:Joi.string().alphanum().required(),
        // password:Joi.string().min(8).max(32).required(),
        avatar: Joi.string(),
    }),
    delete: Joi.object({
        id: Joi.number().required()
    }),
    get: Joi.object({
        id: Joi.number().required()
    }),
    getAll: Joi.object({
        page: Joi.string().default('1'),
        limit: Joi.string().default('6')
    })
}

export default usersSchema
