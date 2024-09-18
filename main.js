// Importing the necessary classes from the 'blockchain.js' file
// 'Blockchain' is the class that handles the entire blockchain, and 'Transaction' handles the transactions.
const {Blockchain, Transaction} = require('./blockchain');

// Importing 'elliptic', a cryptographic library for generating and using keys (used for signing transactions).
// We're using the 'secp256k1' elliptic curve, which is the same used in Bitcoin and other cryptocurrencies.
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

// Creating a private key for the wallet (for testing purposes, the key is hardcoded).
// Normally, this private key should be kept secret, as it controls the ability to send transactions.
const myKey = ec.keyFromPrivate('4b2f5930980184bead9de1aeb0a954636fe33e50cd5296d3ac76fc9f833977b2');

// Deriving the public key (wallet address) from the private key. 
// This public key is what is shared with others to receive funds, and it's converted to hexadecimal format ('hex').
const myWalletAddress = myKey.getPublic('hex');

// Creating a new instance of the Blockchain class, representing a new blockchain called 'nabeelCoin'.
// This will store all the blocks and transactions related to this cryptocurrency.
let nabeelCoin = new Blockchain();

// Creating a new transaction where 'myWalletAddress' (your wallet) sends 10 units of currency
// to another wallet ('public key goes here' placeholder). This represents a transfer of funds.
const tx1 = new Transaction(myWalletAddress, 'public key goes here', 10);

// Signing the transaction using your private key to prove that you're authorized to send funds from your wallet.
// This adds security and ensures that only the owner of the private key can create valid transactions.
tx1.signTransaction(myKey);

// Adding the signed transaction to the blockchain.
// It goes into a "pending transactions" queue that will be processed (mined) later.
nabeelCoin.addTransaction(tx1);

// Starting the mining process.
// Mining processes the pending transactions and adds a new block to the blockchain.
// It rewards the miner (in this case, your wallet address) for verifying the transactions.
console.log('\n Starting the miner...');
nabeelCoin.minePendingTransactions(myWalletAddress);

// Displaying the balance of 'myWalletAddress' after mining.
// This checks how much currency is in your wallet by summing up all transactions to and from your address.
console.log('\n Balance of Nabeel is', nabeelCoin.getBalanceOfAddress(myWalletAddress));

// This line tries to manually alter the transaction amount in the blockchain (this shouldn't be allowed).
// We change the amount of the first transaction in the second block to '1', which simulates tampering.
nabeelCoin.chain[1].transactions[0].amount = 1;

// Verifying if the blockchain is still valid after tampering.
// This checks the integrity of the blockchain, ensuring that no one has altered it.
// The expected output should be 'false', because the blockchain detects the tampering.
console.log('Is chain valid? ', nabeelCoin.isChainValid());
