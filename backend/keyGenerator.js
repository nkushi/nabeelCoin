// Importing the 'elliptic' library, which provides cryptographic functions using elliptic curve algorithms.
// We use this library to create public and private keys for securing and signing data.
const EC = require('elliptic').ec;

// Creating an instance of the elliptic curve algorithm 'secp256k1'.
// This is the same elliptic curve algorithm used in Bitcoin and many other cryptocurrencies for key generation.
const ec = new EC('secp256k1');

// Generating a new key pair, which includes both a public key and a private key.
// The private key is used to sign transactions, while the public key is shared to receive transactions.
const key = ec.genKeyPair();

// Extracting the public key from the key pair and converting it to hexadecimal format ('hex').
// The public key is like a wallet address: it's what you share with others to receive cryptocurrency or data.
const publicKey = key.getPublic('hex');

// Extracting the private key from the key pair and converting it to hexadecimal format ('hex').
// The private key should be kept secret, as it allows you to sign transactions or prove ownership of the public key.
const priavteKey = key.getPrivate('hex');

// Test code to print the private key and public key to the console.
// This is for demonstration purposes and allows you to see the generated keys.
console.log();  // Empty line for spacing
console.log('Private key: ', priavteKey);  // Displaying the private key (keep this secret in real use cases)
console.log();  // Another empty line for spacing
console.log('Public key: ', publicKey);  // Displaying the public key (this can be shared with others)


//Private key:  4b2f5930980184bead9de1aeb0a954636fe33e50cd5296d3ac76fc9f833977b2

//Public key:  04059753872210a15d523376f966e674d923b3d9f80e9cbd41ee6fe17a4e6a86f0379986bcdc88a15d8ed6db2e66ae3815940339262b7bb7e9004da55ad8d5112d