// eslint-disable-next-line no-undef
const ClimateDonation = artifacts.require("ClimateDonation");

module.exports = function (deployer) {
  deployer.deploy(ClimateDonation);
};
