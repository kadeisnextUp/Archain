
const Archain = artifacts.require("Archain");

module.exports = function (deployer) {
  deployer.deploy(Archain);
};
// This migration script deploys the Archain contract to the blockchain.