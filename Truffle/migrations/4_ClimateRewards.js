// eslint-disable-next-line no-undef
const ClimateRewards = artifacts.require("ClimateRewards");

module.exports = function (deployer) {
  deployer.deploy(ClimateRewards);
};
