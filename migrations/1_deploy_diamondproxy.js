const DiamondProxy = artifacts.require("DiamondProxy");
const ReadMessage = artifacts.require("ReadMessage");
const WriteMessage = artifacts.require("WriteMessage");
const AppendMessage = artifacts.require("AppendMessage");

module.exports = async (deployer) => {
    await deployer.deploy(DiamondProxy);
    const diamondProxy = await DiamondProxy.deployed();
    console.log("DiamondProxy deployed to: ", diamondProxy.address);
};