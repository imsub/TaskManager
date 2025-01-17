const { User } = require("../models");
const { status } = require("http-status");
const ApiError = require("../utils/ApiError");
const bcrypt = require("bcryptjs");

/**
 * Get User by id
 * - Fetch user object from Mongo using the "_id" field and return user object
 * @param {String} id
 * @returns {Promise<User>}
 */
const getUserById = async (id) =>{
    const data = await User.findById(id);
    return data;
}


/**
 * Get user by email
 * - Fetch user object from Mongo using the "email" field and return user object
 * @param {string} email
 * @returns {Promise<User>}
 */
const getUserByEmail = async(email) =>{
    try{
        const data = await User.findOne({email:email});
        return data;
      }catch(error){
        throw ApiError(status.NOT_FOUND, error)
      }
}


/**
 * Create a user
 *  - check if the user with the email already exists using `User.isEmailTaken()` method
 *  - If so throw an error using the `ApiError` class. Pass two arguments to the constructor,
 *    1. “200 OK status code using `http-status` library
 *    2. An error message, “Email already taken”
 *  - Otherwise, create and return a new User object
 *
 * @param {Object} userBody
 * @returns {Promise<User>}
 * @throws {ApiError}
 *
 * userBody example:
 * {
 *  "name": "crio-users",
 *  "email": "crio-user@gmail.com",
 *  "password": "usersPasswordHashed"
 * }
 *
 * 200 status code on duplicate email - https://stackoverflow.com/a/53144807
 */
const createUser = async(payload)=>{
    let res = await User.isEmailTaken(payload.email);
    if(res){
        throw new ApiError(status.OK,"Email already taken");
    }
    if(!payload.email){
      throw new ApiError(status.BAD_REQUEST,"Email is not allowed to be empty");
    }
    if(!payload.name){
      throw new ApiError(status.BAD_REQUEST,"Name field is required");
    }
    if(!payload.password){
      throw new ApiError(status.BAD_REQUEST,"Password field is required");
    }
    //const salt = await bcrypt.getSalt();
    const hashedPassword = await bcrypt.hash(payload.password,10);
    const newlyCreated = await User.create({...payload, password:hashedPassword });
    return newlyCreated;
}



/**
 * Get subset of user's data by id
 * - Should fetch from Mongo only the email and address fields for the user apart from the id
 *
 * @param {ObjectId} id
 * @returns {Promise<User>}
 */
const getUserAddressById = async (id) => {
  return await User.findOne({_id:id},{email:1,address:1});
};

/**
 * Set user's shipping address
 * @param {String} email
 * @returns {String}
 */
const setAddress = async (user, newAddress) => {
  user.address = newAddress;
  await user.save();

  return user.address;
};

module.exports = {
  getUserById,getUserByEmail,createUser,setAddress,getUserAddressById
}
