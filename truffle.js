require("dotenv").config();
const Web3 = require("web3");
const web3 = new Web3();
const WalletProvider = require("truffle-wallet-provider");
const HDWalletProvider = require("truffle-hdwallet-provider-privkey");
const privateKeys = [process.env.PRIVATEKEY]
module.exports = {
        networks: {
                development: {
                        host: "localhost",
                        port: 7545,
                        network_id: "*" // eslint-disable-line camelcase
                },
                ropsten: {
                        provider: () => new HDWalletProvider(privateKeys,"https://ropsten.infura.io/v3/ec4171feb4174274bfc492e71dac5dff"),
                        network_id: 3,
                        gas: 4700000
                },
                main: {
                        provider: () => new HDWalletProvider(privateKeys, "https://mainnet.infura.io/ec4171feb4174274bfc492e71dac5dff"),
                        network_id: 1,
                        gas: 3000000,
                        gasPrice: web3.utils.toWei("30", "gwei")
                }
        }
};
