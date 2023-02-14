require('dotenv').config();
const alchemyKey = process.env.REACT_APP_ALCHEMY_KEY;
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(alchemyKey); 

// const magicNUM_contractAddr = process.env.CONTRACT_ADDRESS_MAGICNUM;
const magicNUM_contractAddr = "0x42464896558e901036c5937af8E6208e7Bf386F5";
// const contractABI = require("../contract-abi.json");
// const contractABI = require("../abi/magicNUM_contract-abi.json");
const contractABI = require("../magicNUM_contract-abi.json");

export const magicNumberContract = new web3.eth.Contract(
    contractABI,
    magicNUM_contractAddr
  );

export const loadCurrentMessage = async () => { 
  // console.log('call contract')
   const message = 0;
    // message = await magicNumberContract.methods.magicNUM().call(); 
    // console.log('message',message)
    return message;
};

export const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const addressArray = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        const obj = {
          status: "👆🏽 Write a message in the text-field above.",
          address: addressArray[0],
        };
        return obj;
      } catch (err) {
        return {
          address: "",
          status: "😥 " + err.message,
        };
      }
    } else {
      return {
        address: "",
        status: (
          <span>
            <p>
              {" "}
              🦊{" "}
              <a target="_blank" href={`https://metamask.io/download`}>
                You must install Metamask, a virtual Ethereum wallet, in your
                browser.
              </a>
            </p>
          </span>
        ),
      };
    }
  };

  export const getCurrentWalletConnected = async () => {
    if (window.ethereum) {
      try {
        const addressArray = await window.ethereum.request({
          method: "eth_accounts",
        });
        if (addressArray.length > 0) {
          return {
            address: addressArray[0],
            status: "👆🏽 Write a message in the text-field above.",
          };
        } else {
          return {
            address: "",
            status: "🦊 Connect to Metamask using the top right button.",
          };
        }
      } catch (err) {
        return {
          address: "",
          status: "😥 " + err.message,
        };
      }
    } else {
      return {
        address: "",
        status: (
          <span>
            <p>
              {" "}
              🦊{" "}
              <a target="_blank" href={`https://metamask.io/download`}>
                You must install Metamask, a virtual Ethereum wallet, in your
                browser.
              </a>
            </p>
          </span>
        ),
      };
    }
  };

  export const updateMessage = async (address, message) => {
    if (!window.ethereum || address === null) {
      return {
        status:
          "💡 Connect your Metamask wallet to update the message on the blockchain.",
      };
    }
  
    // if (message.trim() === "") {
    //   return {
    //     status: "❌ Your message cannot be an empty string.",
    //   };
    // }


    //set up transaction parameters
    const transactionParameters = {
        to: magicNUM_contractAddr, // Required except during contract publications.
        from: address, // must match user's active address.
        data: magicNumberContract.methods.updateNUM(message).encodeABI(),
    };

    //sign the transaction
    try {
        const txHash = await window.ethereum.request({
        method: "eth_sendTransaction",
        params: [transactionParameters],
        });
        return {
        status: (
            <span>
            ✅{" "}
            <a target="_blank" href={`https://goerli.etherscan.io/tx/${txHash}`}>
                View the status of your transaction on Etherscan!
            </a>
            <br />
            ℹ️ Once the transaction is verified by the network, the message will
            be updated automatically.
            </span>
        ),
        };
    } catch (error) {
        return {
        status: "😥 " + error.message,
        };
    }




  };

