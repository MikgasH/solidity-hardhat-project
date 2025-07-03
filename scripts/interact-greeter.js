const { ethers } = require("hardhat");

async function main() {
  // Реальный адрес вашего контракта
  const contractAddress = "0xF7B52750054253B783AaA98Fef138481464f821C";

  const Greeter = await ethers.getContractFactory("Greeter");
  const greeter = Greeter.attach(contractAddress);

  console.log("Взаимодействие с контрактом по адресу:", contractAddress);
  
  // Вызов функции greet()
  console.log("Вызов функции greet()...");
  const result = await greeter.greet();
  console.log("Результат:", result);
  
  // Получение имени
  console.log("Получение имени...");
  const name = await greeter.getName();
  console.log("Имя:", name);
  
  // Изменение приветствия
  console.log("Изменение приветствия...");
  const tx = await greeter.setGreeting("Hi there");
  await tx.wait();
  console.log("Приветствие изменено!");
  
  // Проверка нового приветствия
  const newResult = await greeter.greet();
  console.log("Новое приветствие:", newResult);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});