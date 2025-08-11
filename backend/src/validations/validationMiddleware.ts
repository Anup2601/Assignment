const Joi = require("joi");

const testimonialSchema = Joi.object({
  imageUrl: Joi.string().uri().required().messages({
    "string.uri": "Image URL must be a valid URI",
    "string.empty": "Image URL is required"
  })
});

const validateTestimonial = (req: any, res: import("express").Response, next: any) => {
  const { error } = testimonialSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  next();
};

module.exports = validateTestimonial;
