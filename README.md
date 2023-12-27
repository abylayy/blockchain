# Blockchain Assignment 1

## Team Composition
Issenbay Merey SE-2216

Amandykov Abylay SE-2216

Tashenov Tamerlan SE-2213

## Overview

This blockchain project aims to provide a simple yet functional implementation of a blockchain. It includes features such as block creation, proof-of-work mining, digital signatures, and key pair management. The components are designed to be modular and can be used as a foundation for further development and experimentation.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Examples](#examples)

## Prerequisites

Make sure you have Node.js installed on your machine.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/blockchain-project.git
   ```
## Usage
To run the blockchain:
```bash
  npm start
```
## Components
1. Block
The Block class represents a block in the blockchain. It includes methods for calculating the hash, mining the block, and retrieving block information.

2. Blockchain
The Blockchain class manages the blockchain. It includes methods for creating the genesis block, adding blocks, mining blocks, and calculating the Merkle root.

3. DigitalSignature
The DigitalSignature class provides methods for signing and verifying digital signatures using RSA-SHA256.

4. KeyUtil
The KeyUtil class includes methods for generating RSA key pairs and creating key pairs from hexadecimal representations.

## Examples
# Generate RSA Key Pair
```javascript
const KeyUtil = require('./KeyUtil');

const keyPair = KeyUtil.generateKeyPair();
console.log('Generated Key Pair:', keyPair);
```
# Mine a Block
```javascript
const Blockchain = require('./Blockchain');

const blockchain = new Blockchain();
blockchain.addBlock(['Transaction 1', 'Transaction 2']);
console.log('Blockchain:', blockchain.getChain());
```


https://www.canva.com/design/DAF4J52XuqQ/nmxtaS07K35v50HrRGmDXA/edit?utm_content=DAF4J52XuqQ&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton
