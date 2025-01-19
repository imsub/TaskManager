const { status } = require("http-status");
const ApiError = require("../utils/ApiError");
const catchAsync = require("../utils/catchAsync");
const { userService } = require("../services");

const getUser = catchAsync(async (req, res) => {
    const {userId} = req.params;
    const data = await userService.getUserById(userId);
    if(req.query.q == 'address'){
      if(data && data._id.toString() != req.user._id.toString()){
        res.status(403).json({message:"Please authenticate"});
      }
      const result = await userService.getUserAddressById(userId);
      return res.status(200).send({
        address: result.address,
      });

    }
      if(data && data._id.toString() != req.user._id.toString()){
        res.status(403).json({message:"Please authenticate"});
      }else{
        res.status(200).json(data);
      }
});



const setAddress = catchAsync(async (req, res) => {
  const user = await userService.getUserById(req.params.userId);

  if (!user) {
    throw new ApiError(status.NOT_FOUND, "User not found");
  }
  if (user.email != req.user.email) {
    throw new ApiError(
      status.FORBIDDEN,
      "User not authorized to access this resource"
    );
  }

  const address = await userService.setAddress(user, req.body.address);

  res.send({
    address: address,
  });
});

module.exports = {
  getUser,
  setAddress,
};
