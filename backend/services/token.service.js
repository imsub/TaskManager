const jwt = require("jsonwebtoken");
const config = require("../config/config");
const { tokenTypes } = require("../config/tokens");

const generateToken = (userId, expires, type, secret = config.jwt.secret) => {

  const Payload = {
    sub: userId,
    type: type,
    exp: expires
  }
  return jwt.sign(Payload, secret);

};

const generateAuthTokens = async (user) => {
  const accessTokenExpires = Math.floor(Date.now() / 1000) + config.jwt.accessExpirationMinutes * 60 ;
  const accessToken = generateToken(user._id,accessTokenExpires,tokenTypes.ACCESS);
  return {access:{
    token:accessToken,
    expires: new Date(accessTokenExpires*1000)
  },}
};

module.exports = {
  generateToken,
  generateAuthTokens,
};
