const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  
  console.log("Deploying contracts with the account:", deployer.address);
  console.log("Account balance:", (await ethers.provider.getBalance(deployer.address)).toString());

  // Устанавливаем время разблокировки через 1 минуту
  const unlockTime = Math.floor(Date.now() / 1000) + 60;
  
  // Количество ETH для блокировки (0.001 ETH)
  const lockedAmount = ethers.parseEther("0.001");

  const Lock = await ethers.getContractFactory("Lock");
  const lock = await Lock.deploy(unlockTime, { value: lockedAmount });

  await lock.waitForDeployment();

  const contractAddress = await lock.getAddress();
  console.log("Lock deployed to:", contractAddress);
  console.log("Unlock time:", unlockTime);
  console.log("Locked amount:", ethers.formatEther(lockedAmount), "ETH");
  console.log("View on Optimism Sepolia Etherscan:", `https://sepolia-optimism.etherscan.io/address/${contractAddress}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});