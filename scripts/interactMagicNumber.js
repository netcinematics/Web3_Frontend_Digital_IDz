const API_KEY = process.env.API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS_MAGICNUM = process.env.CONTRACT_ADDRESS_MAGICNUM;
// For Hardhat - get contract and abi.
const contract = require("../artifacts/contracts/MagicNumber.sol/MagicNumber.json");
//console.log("ABI", JSON.stringify(contract.abi));
// Provider
const alchemyProvider = new ethers.providers.AlchemyProvider(network="goerli", API_KEY);
// Signer
const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);
// Contract
const magicNumberContract = new ethers.Contract(CONTRACT_ADDRESS_MAGICNUM, contract.abi, signer);

async function main() {
    const magicNUM = await magicNumberContract.magicNUM();
    console.log("The magicNUM is:" + magicNUM);
    console.log("Update the magicNUM...");
    const tx = await magicNumberContract.updateNUM(88); //pending, mined, or dropped: goerli etherscan.
    await tx.wait();  //if left out, local contract not be able to see the updated magicNUM value

    const newNUM = await magicNumberContract.magicNUM();
    console.log("The NEW NUM is: " + newNUM); 

  }
  main();