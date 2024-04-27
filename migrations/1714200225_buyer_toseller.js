const buyerToSeller = artifacts.require("buyerToSeller");

module.exports = function (deployer) {
    deployer.deploy(buyerToSeller);
};
