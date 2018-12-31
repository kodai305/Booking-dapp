import web3 from './myweb3';

const address = '0x0bB16ed080dd75A03d58f08449961144333eEd42';

const abi = [{
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
    "type": "function"
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
    "type": "function"
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
    "type": "function"
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
    "type": "function"
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
    "type": "function"
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
    "type": "function"
}];

export default new web3.eth.Contract(abi, address);