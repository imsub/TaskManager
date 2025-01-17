const { Product } = require("../models");

/**
 * Get Product by id
 * @param {ObjectId} id
 * @returns {Promise<User>}
 */
const getProductById = async (id) => {
  return await Product.findById(id);
};

/**
 * Fetch all products
 * @returns {Promise<List<Products>>}
 */
const getProducts = async () => {
  return await Product.find({});
};
const createProduct = async(productDetails) =>{
  return await Product.create(productDetails);
}
module.exports = {
  getProductById,
  getProducts,
  createProduct,
};