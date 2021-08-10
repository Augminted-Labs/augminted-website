const EightBallFactory = artifacts.require("EightBallFactory");

module.exports = function (deployer) {
  deployer.deploy(EightBallFactory);
};
