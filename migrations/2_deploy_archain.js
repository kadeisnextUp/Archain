const Archain = artifacts.require("Archain");

module.exports = function (deployer) {
  // Deploy with 1 million ARCH tokens (with 18 decimal places)
  deployer.deploy(Archain, web3.utils.toWei("1000000", "ether"));
};
