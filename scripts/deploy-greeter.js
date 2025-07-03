const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  
  console.log("Deploying contracts with the account:", deployer.address);
  console.log("Account balance:", (await ethers.provider.getBalance(deployer.address)).toString());

  // Имя для контракта Greeter
  const name = "Blockchain Student"; // Можете изменить на любое имя

  const Greeter = await ethers.getContractFactory("Greeter");
  const greeter = await Greeter.deploy(name);

  await greeter.waitForDeployment();

  const contractAddress = await greeter.getAddress();
  console.log("Greeter deployed to:", contractAddress);
  console.log("Name set to:", name);
  
  // Тестируем функцию greet()
  const greetingResult = await greeter.greet();
  console.log("Greeting result:", greetingResult);
  
  console.log("View on Optimism Sepolia Etherscan:", `https://sepolia-optimism.etherscan.io/address/${contractAddress}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});