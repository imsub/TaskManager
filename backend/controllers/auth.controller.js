const { status } = require("http-status");
const catchAsync = require("../utils/catchAsync");
const { authService, userService, tokenService } = require("../services");
const config = require("../config/config");
const accessTokenExpires =
  Math.floor(Date.now() / 1000) + config.jwt.accessExpirationMinutes * 60;
const { tokenTypes } = require("../config/tokens");

const register = catchAsync(async (req, res) => {
    const user = await userService.createUser(req.body);
    //const token = tokenService.generateToken(newUser._id.toJSON(),accessTokenExpires,tokenTypes.ACCESS);
    const token = await tokenService.generateAuthTokens(user);
    res.status(status.CREATED).json({user:user,tokens:token,success:true});
});


const login = catchAsync(async (req, res) => {
  const {email , password} = req.body;
  const user = await authService.loginUserWithEmailAndPassword(email,password);
  const tokens = await tokenService.generateAuthTokens(user);
  res.send({user,tokens,success:true});
});

module.exports = {
  register,
  login,
};
