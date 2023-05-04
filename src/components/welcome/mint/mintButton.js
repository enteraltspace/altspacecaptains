import React, { useState } from "react";
import "./mintButton.css";
import { abi, contractAddress } from "../constants.js";
// import "./data.env";

import Web3 from "web3";
import Web3Modal from "web3modal";

const switchToPolygon = async () => {
  try {
    await window.ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: "0x89" }], // chainId for the Polygon network
    });
  } catch (error) {
    if (error.code === 4902) {
      try {
        await window.ethereum.request({
          method: "wallet_addEthereumChain",
          params: [
            {
              chainId: "0x89", // chainId for the Polygon network
              chainName: "Polygon",
              rpcUrls: ["https://rpc-mainnet.matic.network"],
              blockExplorerUrls: ["https://polygonscan.com/"],
            },
          ],
        });
      } catch (addError) {
        throw addError;
      }
    }
  }
};
export function MintButton({ value }) {
  const mintValue = value;
  const [isMinting, setIsMinting] = useState(false);
  const [transactionReceipt, setTransactionReceipt] = useState(null);
  const MintNow = async () => {
    setIsMinting(true);
    const WalletConnectProvider = window.WalletConnectProvider.default;
    let providerOptions = {
      walletconnect: {
        package: WalletConnectProvider,
        options: {
          infuraId: process.env.REACT_APP_ALCHEMY_ID,
          chainId: 137,
          rpc: {
            137: process.env.REACT_APP_ALCHEMY_URL,
          },
        },
      },
    };

    const web3Modal = new Web3Modal({
      network: "mainnet", // optional
      cacheProvider: true, // optional
      providerOptions, // required
    });

    const provider = await web3Modal.connect();
    const web3 = new Web3(provider);

    const chainConnected = web3.eth.getChainId();
    if (chainConnected !== 137) {
      await switchToPolygon();
    }
    const account = web3.eth.getAccounts();
    const contractInstance = new web3.eth.Contract(abi, contractAddress);
    const mintPrice = await contractInstance.methods.mintPrice().call();

    account.then(async (result) => {
      const balance = await web3.eth.getBalance(result[0]);

      if (balance < mintPrice * mintValue) {
        alert("Inadequate funds in wallet.");
        setIsMinting(false);
      }

      console.log(mintPrice);
      let txTransfer = {
        from: result[0],
        to: contractAddress,
        //  gas: web3.utils.toHex(web3.utils.toWei( '.028' , 'gwei' )),
        maxPriorityFeePerGas: 60000000000,
        maxFeePerGas: 600000000000,
        value: mintValue * mintPrice,
        gas: 264208,
        data: contractInstance.methods.mint(mintValue).encodeABI(),
      };

      web3.eth
        .sendTransaction(txTransfer)
        .on("receipt", function (receipt) {
          if (
            window.confirm(
              "NFT mint Sucessful. Click, Ok to view the transaction"
            )
          ) {
            window.open(
              `https://polygonscan.com/tx/${receipt.transactionHash}`,
              "_blank"
            );
          }

          setTransactionReceipt(receipt);
          setIsMinting(false);
          // alert(`NFT Mint Successful https://polygonscan.com/tx/${hash}`);
        })
        .on("error", function (error, receipt) {
          alert(error.message);
          setTransactionReceipt(receipt);
          setIsMinting(false);
        });
    });
  };
  return (
    <>
      <button
        disabled={isMinting || !!transactionReceipt}
        className="mint-button"
        onClick={MintNow}
      >
        {isMinting ? "Minting..." : transactionReceipt ? "Mint" : "Mint"}
      </button>
    </>
  );
}

//export function MintButton({ value }) {
