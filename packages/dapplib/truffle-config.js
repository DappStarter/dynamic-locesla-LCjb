require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good slice obscure suspect normal note random unaware grace opinion blue gift'; 
let testAccounts = [
"0xccd6a1578145ac5230c888ce44495507884f0c601e9d78ce507ccf884e842156",
"0x3ba7375d2f83411bb7a28074bd6bb304468129f44815829709401f70747596d6",
"0x60d603840d441501d7951c38bd378170cea1ebc06dd9086f7d6a20505d80c311",
"0x4fd76defa5d4baed681e0a233ff4bacee968d8b5820170c2ad5e42528b899ba8",
"0x1413bf43a5784fb5934cf2e31329be6103900baea933d311f0b002afb3c20a30",
"0x17f4ce15af209098c2aa6d1b6e263e5f29bd8d80fc9d680a35e3ef8c14a1acc3",
"0x1bd0d57df886276e6ea18b7349ff50d8da907b8e779d8508ab8664cdb468a6e5",
"0x50d26a41fe928d87cff5f364b1f4a9934f13f517bed197ac861e937696bfc7eb",
"0x73c866d0b7e19379bdf87cd0334db774cf4c5862c7ce57e985f4166cf7dd3dfe",
"0x61fb2b2f78b5d19953742f7ab4a9d1f1192b80fdb38e3b1bde84a27d0bb85e36"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

