const NFT = artifacts.require("NFT");

module.exports = function (deployer) {
  await deployer.deploy(NFT);
  const nft = await NFT.deployed();
  await nft.mint(accounts[0]);
};
