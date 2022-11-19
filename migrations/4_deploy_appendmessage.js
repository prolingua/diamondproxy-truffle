const DiamondProxy = artifacts.require("DiamondProxy");
const ReadMessage = artifacts.require("ReadMessage");
const WriteMessage = artifacts.require("WriteMessage");
const AppendMessage = artifacts.require("AppendMessage");

module.exports = async (deployer) => {
   
    await deployer.deploy(AppendMessage);
    const appendMessage = await AppendMessage.deployed();
    console.log("AppendMessage deployed to: ", appendMessage.address);

};