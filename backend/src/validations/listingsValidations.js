import Joi from 'joi';

export const validateListing = (req, res, next) => {
    const schema = Joi.object({
        brand: Joi.string().required(),
        // image: Joi.string().uri().required(),
        price: Joi.number().required(),
        eco: Joi.string().required(),
        yearKm: Joi.number().required(),
        model: Joi.string().required(),
        location: Joi.string().required(),
        date: Joi.string().required()
    });

    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    next();
};
