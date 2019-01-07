import web3 from './myweb3';
// 参考
// https://qiita.com/kolife/items/dab22e59a4f746f3e7c8

const address = '0xF8E953Df424507b216B5f883676a270D18A3f83d';
//const address = '0x9ed47efdb515aF26D1bB21a0a3AE8C4Ea7C24e0a';

const abi = [
    {
        "constant": false,
        "inputs": [
          {
            "name": "_ticketName",
            "type": "string"
          },
          {
            "name": "_eventInfo",
            "type": "string"
          }
        ],
        "name": "issueTicket",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0xc413e2b6"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "_owner",
            "type": "address"
          }
        ],
        "name": "getTicketIds",
        "outputs": [
          {
            "name": "ids",
            "type": "uint256[]"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0x76870bb2"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "_owner",
            "type": "address"
          }
        ],
        "name": "getReservedTicketIds",
        "outputs": [
          {
            "name": "ids",
            "type": "uint256[]"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0x3821228e"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "getCurrentTicketId",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0xbc49516b"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "_ticketId",
            "type": "uint256"
          }
        ],
        "name": "getTicketInfo",
        "outputs": [
          {
            "name": "",
            "type": "address"
          },
          {
            "name": "ticketName",
            "type": "string"
          },
          {
            "name": "eventInfo",
            "type": "string"
          },
          {
            "name": "",
            "type": "address"
          },
          {
            "name": "status",
            "type": "string"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0xff99a063"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_ticketId",
            "type": "uint256"
          }
        ],
        "name": "reserveTicket",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0x3c45a5d8"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_ticketId",
            "type": "uint256"
          }
        ],
        "name": "approveToParticipate",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0x135cadaa"
      }
];

var Booking = null;
if (typeof(window.web3) !== 'undefined' || window.web3 != null) {
  Booking = new web3.eth.Contract(abi, address);
}
export default (Booking);