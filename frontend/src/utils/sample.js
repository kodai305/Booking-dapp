
//import { ABI } from './contract_abi';
//import { hoge } from './contract_abi';

const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

web3.eth.getAccounts((error, result) => {
	console.log(result)
});

web3.eth.getBlock(0, (error, result) => {
    console.log(result);
});

var foo = require('./contract_abi').hoge;
console.log(foo);

//コントラクトのアドレス
//var address = "0xd014Ec9da5d72DB0fB136635b1f5fba8B77DA7bB";

//コントラクトの取得
//var contract = web3.eth.contract(contractABI).at(address);
