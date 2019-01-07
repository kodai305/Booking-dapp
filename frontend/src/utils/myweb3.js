import Web3 from 'web3';

var web3 = null;
if (typeof(window.web3) !== 'undefined' || window.web3 != null) {
    console.log(typeof(window.web3));
    console.log(typeof(window.web3.currentProvider));
    console.log(typeof(window));
    web3 = new Web3(window.web3.currentProvider);
}
export default web3;