const DiamondProxy = artifacts.require("DiamondProxy");
const ReadMessage = artifacts.require("ReadMessage");
const WriteMessage = artifacts.require("WriteMessage");
const AppendMessage = artifacts.require("AppendMessage");

module.exports = async (deployer) => {
    
    await deployer.deploy(ReadMessage);
    const readMessage = await ReadMessage.deployed();
    console.log("ReadMessage deployed to: ", readMessage.address);

};