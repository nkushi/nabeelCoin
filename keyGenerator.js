const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const key = ec.genKeyPair();
const publicKey = key.getPublic('hex');
const priavteKey = key.getPrivate('hex');

//test code
console.log();
console.log('Private key: ', priavteKey);
console.log();
console.log('Public key: ', publicKey);

//Private key:  4b2f5930980184bead9de1aeb0a954636fe33e50cd5296d3ac76fc9f833977b2

//Public key:  04059753872210a15d523376f966e674d923b3d9f80e9cbd41ee6fe17a4e6a86f0379986bcdc88a15d8ed6db2e66ae3815940339262b7bb7e9004da55ad8d5112d