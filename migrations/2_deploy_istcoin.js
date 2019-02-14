var SujiCoin = artifacts.require("./ISTCoin.sol");
 
module.exports = function(deployer) {
    deployer.deploy(SujiCoin);
};

