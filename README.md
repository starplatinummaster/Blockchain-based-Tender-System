
# Blockchain Based Tender Management System

## Overview

This project presents a blockchain-based tender and contract management system designed to enhance transparency, security, and efficiency in procurement processes. Implemented using Solidity and deployed over the Ethereum network, the system features two user interfaces: one for buyers and one for vendors.

## Features

- **Tender Creation**: Buyers can create tender requests by selecting items, which are then sent to vendors for review.
- **Vendor Interaction**: Vendors can view these requests, accept them, and provide quotes, initiating the negotiation process.
- **Smart Contracts**: Automates various processes, including tender creation, acceptance, and contract generation.
- **Secure Transactions**: Integration with MetaMask enables secure transaction processing.
- **Blockchain Transparency**: Ensures transactions are securely managed and transparently tracked on the Ethereum blockchain.

## Technology Stack

- **Solidity**: For writing smart contracts.
- **Ethereum**: Blockchain platform for deploying contracts.
- **MetaMask**: For secure transaction processing.
- **Ganache**: For local blockchain testing.

## Installation

1. Clone the repository
   ```sh
   git clone https://github.com/yourusername/blockchain-tender-management.git
2. Navigate to the project directory
   ```sh
   cd blockchain-tender-management
3. Install dependencies
   ```sh
   npm install
5. Compile the smart contract this can be done in two environments:

  I. Deploying a Smart Contract Using Remix

   1. Go to [Remix IDE](https://remix.ethereum.org).
   2. Click on the "Solidity Compiler" tab on the left panel.
   3. Select the appropriate compiler version.
   4. Click on "Compile TenderContract.sol".
   5. Click on the "Solidity Compiler" tab, select the appropriate compiler version, and compile it.
   6. Click on the "Deploy & Run Transactions" tab.
   7. Select the environment (JavaScript VM for testing or Injected Web3 for deploying to the Ethereum network using MetaMask) and ensure your MetaMask is connected to the desired network.
   8. Click on "Deploy" to deploy your contract.
   9. Copy the contract address to use it in your web application to interact with the deployed contract in the frontend.
      
  II. Deploy the contract using truffle and ganache
   Install Truffle and Ganache:
   ```sh
   npm install -g truffle
   npm install -g ganache-cli
   ```

   Initialize Truffle:
   Inside the project directory, run:
   ```sh
   truffle init

   
   
