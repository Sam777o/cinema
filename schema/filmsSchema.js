import Joi from "joi";


const filmSchema = {
    create: Joi.object({
        name: Joi.string().alphanum().required(),
        description:Joi.string().alphanum().required(),
        genre: Joi.string().alphanum().required(),
        year:Joi.date().required(),
        ageLimit:Joi.number().required(),
        rating:Joi.string().required(),
        duration:Joi.number().required(),
        ticketsStatus:Joi.string().required(),
        writer:Joi.string().required(),
        trailerPath:Joi.string().alphanum().required(),
        country:Joi.string().required(),
        image:Joi.string().required()
    }),
    update:Joi.object({
        id:Joi.number().required(),
        description:Joi.string().alphanum().required(),
        rating:Joi.string().required(),
        ticketsStatus:Joi.string().required(),
        trailerPath:Joi.string().alphanum().required(),
        image:Joi.string().required()
    }),
    delete: Joi.object({
        id: Joi.number().required()
    }),
    get: Joi.object({
        id:Joi.number().required()
    }),
    getAll: Joi.object({
        page: Joi.string().required().default('1'),
        limit: Joi.string().required().default('6')
    })
}

export default filmSchema
