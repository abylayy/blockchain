const crypto = require("crypto");

class Block {
  constructor(previousHash, transactions) {
    this.timestamp = Date.now();
    this.previousHash = previousHash;
    this.transactions = [...transactions];
    this.nonce = 0; // Add nonce for PoW
    this.hash = this.calculateHash();
    this.transactions.push("Mining Reward");
  }

  calculateHash() {
    const data =
      this.timestamp +
      this.previousHash +
      JSON.stringify(this.transactions) +
      this.nonce;
    const hash = crypto
      .createHash("sha256")
      .update(data, "utf-8")
      .digest("hex");
    return hash;
  }

  mineBlock(difficulty) {
    while (
      this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")
    ) {
      this.nonce++;
      this.hash = this.calculateHash();
    }
    console.log("Block mined: " + this.hash);
  }

  getTimestamp() {
    return this.timestamp;
  }

  getPreviousHash() {
    return this.previousHash;
  }

  getTransactions() {
    return this.transactions;
  }

  getHash() {
    return this.hash;
  }
}

module.exports = Block;
