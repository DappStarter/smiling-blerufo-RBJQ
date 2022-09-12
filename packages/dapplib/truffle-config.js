require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict hero force spot toy note meadow million include private orange gaze'; 
let testAccounts = [
"0xa6a173a7639bbd893458853b6e1db7828e96e9ea0173116d1413796d8519926a",
"0x2496f49b81aebae2abe6e8ae92e91f7919934da4c03b62a9661635518d75265e",
"0x79fb77b36b68189b2425bc778425766f0efc2773b11a04c7569846ea15589b7c",
"0x36eac8a3d163ff13e2fe755f73e1c39b3d67dc83c50a8473f12c5ecd87f953fd",
"0xde792f753ff3f0e3f2aa707f3dd0dfa0b456ff340c1ef1d8c3502b8328ab0955",
"0x7f0255830ff44f5ad4966d7f610beb3206bca5ef8848c9ddf9847d11d66a121e",
"0x2ebec0337277780f56b7ec1bd1a5ba597b0e49b2366d0ade90475afa5aeb0497",
"0xf5b9cfbbf4eb8690546ca997df7e1d6862dd65e4b1f38d9733ae23522987a706",
"0x28a902205fc3d19f9ac19d42cbe60080e9a9778c2040ea289a8f3bb6960a2173",
"0x2e5505cb9fa8ece6a87694a2c6dd3d7937dac92cf061e85bebb52d8832f5cd04"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


