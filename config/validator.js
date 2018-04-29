var Joi = require('joi');

var userSchema = Joi.object().keys({
    Username: Joi.string().min(3).max(30).required(),
    Password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
    U_Email: Joi.string().email().allow(''),
    U_Address: Joi.string().allow(''),
    U_Phone: Joi.string().alphanum().min(10).max(13).allow('')
})

module.exports = {
    userSchema
}