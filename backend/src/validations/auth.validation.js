const Joi = require("joi");
const { password } = require("./custom.validation");

// TODO: CRIO_TASK_MODULE_AUTH - Define request validation schema for user registration
/**
 * Check request *body* for fields (all are *required*)
 * - "email" : string and satisyfing email structure
 * - "password": string and satisifes the custom password structure defined in "src/validations/custom.validation.js"
 * - "name": string
 */
const register = {
  body:Joi.object()
.keys({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password:Joi.string().required().custom(password),
  // walletMoney:Joi.number().required().default(0),
  // address: Joi.string().default(config.default_address),
}),
};

/**
 * Check request *body* for fields (all are *required*)
 * - "email" : string and satisyfing email structure
 * - "password": string and satisifes the custom password structure defined in "src/validations/custom.validation.js"
 */
const login = {
  body:Joi.object()
.keys({
  email: Joi.string().email().required(),
  password:Joi.string().required(),
}),
};

module.exports = {
  register,
  login,
};
