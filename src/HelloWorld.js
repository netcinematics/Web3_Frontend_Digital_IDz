import React from "react";
import { useEffect, useState } from "react";
import {
  helloWorldContract,
  connectWallet,
  updateMessage,
  loadCurrentMessage,
  getCurrentWalletConnected,
} from "./util/interact.js";

import alchemylogo from "./alchemylogo.svg";

const HelloWorld = () => {
  //state variables
  const [walletAddress, setWallet] = useState("");
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState("No connection to the network."); //default message
  const [newMessage, setNewMessage] = useState("");

  //called only once
  useEffect(() => {
    async function fetchMessage() {
      const message = await loadCurrentMessage();
      setMessage(message);
    }
    fetchMessage();
    addSmartContractListener();
  
    async function fetchWallet() {
      const {address, status} = await getCurrentWalletConnected();
      setWallet(address)
      setStatus(status); 
    }
    fetchWallet();
    addWalletListener(); 
  }, []);

  function addSmartContractListener() {
    helloWorldContract.events.UpdatedMessages({}, (error, data) => {
      if (error) {
        setStatus("😥 " + error.message);
      } else {
        setMessage(data.returnValues[1]);
        setNewMessage("");
        setStatus("🎉 Your message has been updated!");
      }
    });
  }

  function addWalletListener() {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          setWallet(accounts[0]);
          setStatus("👆🏽 Write a message in the text-field above.");
        } else {
          setWallet("");
          setStatus("🦊 Connect to Metamask using the top right button.");
        }
      });
    } else {
      setStatus(
        <p>
          {" "}
          🦊{" "}
          <a target="_blank" href={`https://metamask.io/download`}>
            You must install Metamask, a virtual Ethereum wallet, in your
            browser.
          </a>
        </p>
      );
    }
  }

  const connectWalletPressed = async () => {
    const walletResponse = await connectWallet();
    setStatus(walletResponse.status);
    setWallet(walletResponse.address);
  };

  const onUpdatePressed = async () => {
    const { status } = await updateMessage(walletAddress, newMessage);
    setStatus(status);
};

const onVoteOne = async () => { //TODO: implement
  console.log('clicked');
};
const onVoteTwo = async () => { //TODO: implement
 console.log('clicked'); 
};

  //the UI of our component
  return (
    <div id="container" style={{'display':'flex','alignItems':'center'}}>
      <h1>~Digital-Identity-Tokenz (DIDz)~</h1>
      <h1>~PIRATEorNINJA?~</h1>
      <img id="logo" src="https://nftstorage.link/ipfs/bafybeiabjffxg6grlmirw6mum6utcl4zbrukiytmqrbbt2jy2c2wkfekye/4.jpg"></img>
      {/* <img id="logo" src={alchemylogo}></img> */}
    <section>
      <button className="hoverBtn" id="voteOne" onClick={onVoteOne}>
          Select Pirate!
        </button>
        <button className="hoverBtn" id="voteTwo"  onClick={onVoteTwo}>
          Select Ninja!
        </button>      
        <button className="hoverBtn" id="publish" onClick={onUpdatePressed}>
          Mint ID!
        </button>          
        </section>


      <button id="walletButton" onClick={connectWalletPressed}>
        {walletAddress.length > 0 ? (
          "Connected: " +
          String(walletAddress).substring(0, 6) +
          "..." +
          String(walletAddress).substring(38)
        ) : (
          <span>Connect Wallet</span>
        )}
      </button>
<section>
      <h2 style={{ paddingTop: "50px" }}>Last ID:</h2>
      <p>{message}</p>
</section>
      <div>
      <h2 style={{ paddingTop: "18px" }}>New ID:</h2>
        <input
          type="text"
          placeholder="Update the message in your smart contract."
          onChange={(e) => setNewMessage(e.target.value)}
          value={newMessage}
        />
        <p id="status">{status}</p>

        {/* <button id="publish" onClick={onUpdatePressed}>
          Update
        </button> */}
      </div>
    </div>
  );
};

export default HelloWorld;
