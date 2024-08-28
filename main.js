const {Blockchain, Transaction} = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('4b2f5930980184bead9de1aeb0a954636fe33e50cd5296d3ac76fc9f833977b2');
const myWalletAddress = myKey.getPublic('hex');

//Code tests
let nabeelCoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, 'public key goes here', 10);
tx1.signTransaction(myKey);
nabeelCoin.addTransaction(tx1);

console.log('\n Starting the miner...');
nabeelCoin.minePendingTransactions(myWalletAddress);

console.log('\n Balance of Nabeel is', nabeelCoin.getBalanceOfAddress(myWalletAddress));

nabeelCoin.chain[1].transactions[0].amount = 1;

console.log('Is chain valid? ', nabeelCoin.isChainValid());