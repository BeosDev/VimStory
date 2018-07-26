var Joi = require('joi');

var userSchema = Joi.object().keys({
    Username: Joi.string().alphanum().min(6).max(20).required(),
    Password: Joi.string().min(6).max(20).required(),
    U_Email: Joi.string().email().allow(''),
    U_Address: Joi.string().allow(''),
    U_Phone: Joi.string().regex(/^[0-9]{8,13}$/).allow('')
})

module.exports = {
    userSchema
}