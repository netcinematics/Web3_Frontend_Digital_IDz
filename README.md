# web3_RandomElections_au_001
Random~Electionsz | PIRATEorNINJA - project for ETHDENVER ENCODE Camp using Alchemy as the node-provider.

## SETUP ENVIRONMENT

> npm install

then to connect:
> npm install @alch/alchemy-web3
> npm install dotenv --save

> npm start,   //connection to contract works!

//INSTALL HARDHAT LOCALLY:
> npm install --save-dev hardhat
//UPDATE CONFIG: hardhat.config
//Get ETHERS
> npm install --save-dev @nomiclabs/hardhat-ethers "ethers@^5.0.0"
//Get ETHERScan
> npm install --save-dev @nomiclabs/hardhat-etherscan
> npx hardhat compile
//Compiled 1 Solidity file successfully

//DEPLOY
> npx hardhat run scripts/deploy.js --network goerli
// VERIFY with EtherScan:
> npm install --save-dev @nomiclabs/hardhat-etherscan
// ETHERSCAN integration
UPDATE hardhat.config - to ETHERSCAN, with eKey.
VERIFY:
> npx hardhat verify --network goerli DEPLOYED_CONTRACT_ADDRESS 'Hello World!'
Gotta Get Parameters exactly correct for ABI VERIFICATION.


EXTENSION-GOAL: LIFECYCLE of adding a new CONTRACT (below)

- Magic Number is exact same as Hello World... but a number.


## EXTEND CONTRACTS - across UI.

X - compile helloworld

X - clone HelloWorld to MagicNumber

X - compile MagicNumber, 

X - TEST MagicNumber in REMIX.

X - review contract creation steps for notes

X - clone deploy to deployMagicNumber.js

> npx hardhat run scripts/deployMagicNumber.js --network goerli

Compiled 1 Solidity file successfully
Contract deployed to ADDRESS: 0x42464

## TEST CONTRACT from LOCAL HardHat

X - clone interact to interactMagicNumber.js

X - replace calls to HelloWorld with MagicNumber.

X - env of MagicNum contract location.

> npx hardhat run scripts/interactMagicNumber.js --network goerli

The magicNUM is:44
Update the magicNUM...
The NEW NUM is: 88

## DEPLOY and VERIFY MAGICNUMBER to be accessed by DAPP.

> npx hardhat verify --network goerli 0x424...896558e901036c5937af8E6208e7Bf386F5 44

Successfully submitted source code for contract
contracts/MagicNumber.sol:MagicNumber at 0x424...96558e901036c5937af8E6208e7Bf386F5
for verification on the block explorer. Waiting for verification result...

Successfully verified contract MagicNumber on Etherscan.
https://goerli.etherscan.io/address/0x42464...558e901036c5937af8E6208e7Bf386F5#code

## INTERACT FROM DAPP

X - swap helloworld to magicnumber

X - clone HelloWorld file to src/MagicNumber.js

X - clone interact to interactMagicNumber

X - clone contract-abi.json into src/abi/magicNumber-abi.json

X - UPDATE ABI file with "Contract ABI" from VERIFIED ETHERSCAN LINK.

https://goerli.etherscan.io/address/0x424...96558e901036c5937af8E6208e7Bf386F5#code

## MagicNumber uses MODEL instance to make separated VIEW 

X - attaches at the APP LEVEL! 

> npm start //lots of errors

X - ROLLBACK HelloWorld in the APP - SUCCESS (on save)

X - DEBUG by slowly adding in useEffect() HOOK.

X - stub off fetchMessage() magicNUM it breaks. Also addSmartContractListener

## DEMO DAY GOALS

X - MOVE OVER PIRATE HTML to stubbed screen.

X - DEMO DETAILS - text/script - in README.


> ENCODE CAMP Final Project!  PIRATEorNINJA???

~ CAST yer VOTE - to the BLOCKCHAIN!

> TEAM~INTRO:
   spazeFalcon, Tim Wolters, EricBadi, Keheira(innonimant_dev), 
   ideation phase: inspired by Smurflow, icculus and KJha

> PROJECT:
            RANDOM~ELECTIONz   |    PIRATEorNINJA???

> PROBLEM~DESCRIPTION:
   MINIMUM VOTING SYSTEM (MVP). 
   - KEY SOLUTION: design miminalistic complexity, meet deadline, extend later.
   - KEY INNOVATION: MINT your VOTE to NFT. 
   - KEY CONCEPTS: Access Token, Anonymous ID token. 
   - extensible to "dynamic laws" - and Quadratic Voting,
   - extensible to MULTIMEDIA~NFT~FACTORY.

> TECHNICAL~DETAILS:
   Solidity contract, connected to React GUI,
   with Alchemy Provider, on Hardhat with ETHERS.
   EtherScan Verified (ABI), viewed through OpenSea testnet.

> OVERVIEW:
   What are YOU - PIRATEorNINJA???
   See you at ETHDENVER 2023!
   See you at AlchemyU/Discord.

   Let's BUIDL ... @spazefalcon


> npm start