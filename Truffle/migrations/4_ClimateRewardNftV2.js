// eslint-disable-next-line no-undef
const ClimateRewardNftV2 = artifacts.require("ClimateRewardNftV2");

module.exports = function (deployer) {
  deployer.deploy(ClimateRewardNftV2);
};
