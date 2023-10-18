import HttpError from "http-errors";

const validate = (schema, path) => async (req, res, next) => {
    try {
        await schema.validateAsync(req[path], {
            abortEarly: false,
        });
        next();
    } catch (error) {
        const errors = {};
        error.details.forEach((detail) => {
            errors[detail.path.join('.')] = detail.message;
        });
        next(HttpError(422, { errors }));
    }
};
export default validate
