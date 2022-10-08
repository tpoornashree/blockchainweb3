require('@nomiclabs/hardhat-waffle');
// https://eth-goerli.g.alchemy.com/v2/tEV7i7zCRFdRGm03-WIwgmldX5iP6Ihs
module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/tEV7i7zCRFdRGm03-WIwgmldX5iP6Ihs',
      accounts: ['2d499178af3b9d3ec2199453460d47e188311c30a164288037c201de97262964'],
    },
  },
};