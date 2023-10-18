import Joi from "joi";

const cardSchema = {
    addCard: Joi.object({
        userId: Joi.string().alphanum().required(),
        cardNumber:Joi.string().min(12).max(12).required(),
        expiration:Joi.string().min(8).required(),
        securityCode: Joi.string().min(3).max(3)
    }),
    delete: Joi.object({
        id: Joi.number().required()
    }),
    get:Joi.object({
        id: Joi.number().required()
    })
}

export default cardSchema
