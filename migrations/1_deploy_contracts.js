
const Archain = artifacts.require("Archain");

module.exports = function (deployer) {
    // smaller unit for easier testing
    const initialSupply = web3.utils.toWei("100", "ether"); // 100 ARCH
    deployer.deploy(Archain, initialSupply);
};
// This migration script deploys the Archain contract to the blockchain.