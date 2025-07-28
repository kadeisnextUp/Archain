
const Archain = artifacts.require("Archain");

module.exports = function (deployer) {
    const initialSupply = web3.utils.toWei("1000000", "ether"); // 1 million ARCH
    deployer.deploy(Archain, initialSupply);
};
// This migration script deploys the Archain contract to the blockchain.