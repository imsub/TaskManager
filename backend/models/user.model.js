const mongoose = require("mongoose");
// NOTE - "validator" external library and not the custom middleware at src/middlewares/validate.js
const validator = require("validator");
const config = require("../config/config");
const ApiError = require("../utils/ApiError");
const bcrypt = require("bcryptjs");
const users = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: true,
        validate: (value) => validator.isEmail(value),
    },
    password: {
      type: String,
      validate(value) {
        if (!value.match(/\d/) || !value.match(/[a-zA-Z]/)) {
          throw new Error(
            "Password must contain at least one letter and one number"
          );
        }
      },
      required: true,
      trim: true,
    },
  },
  // Create createdAt and updatedAt fields automatically
  {
    timestamps: true,
  }
);


/**
 * Check if email is taken
 * @param {string} email - The user's email
 * @returns {Promise<boolean>}
 */
users.statics.isEmailTaken = async function (email) {
    const data = await mongoose.model("User",users).findOne({email:email});
    return !!data;
};

/**
 * Check if entered password matches the user's password
 * @param {string} password
 * @returns {Promise<boolean>}
 */
users.methods.isPasswordMatch = async function (password) {
  const user = this;
  return bcrypt.compare(password,user.password);
};
  




/*
 * Create a Mongoose model out of userSchema and export the model as "User"
 * Note: The model should be accessible in a different module when imported like below
 * const User = require("<user.model file path>").User;
 */
/**
 * @typedef User
 */
const User = mongoose.model("User",users);
module.exports={ User};
