const Joi = require("joi");

const addShema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email({minDomainSegments:2}).required(),
    phone: Joi.string().length(10).pattern(/^[0-9]+$/).required()
})

module.exports = addShema;