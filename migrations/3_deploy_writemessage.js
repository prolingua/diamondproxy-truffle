const DiamondProxy = artifacts.require("DiamondProxy");
const ReadMessage = artifacts.require("ReadMessage");
const WriteMessage = artifacts.require("WriteMessage");
const AppendMessage = artifacts.require("AppendMessage");

module.exports = async (deployer) => {
    await deployer.deploy(WriteMessage);
    const writeMessage = await WriteMessage.deployed();
    console.log("WriteMessage deployed to: ", writeMessage.address);
};