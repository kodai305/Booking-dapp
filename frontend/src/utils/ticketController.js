import web3 from './myweb3';
import Booking from './Booking';


const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

async function issueNewTicket(values) {
  var title = values.title;
  var description = values.description;
  // get accounts 
  const accounts = await web3.eth.getAccounts();
  const instance = Booking;
  console.log(instance);
  try {
    var ret = await Booking.methods.issueTicket(title, description).send({
      from: accounts[0]
    });
  } catch (e) {
    console.log(e);
  }
  console.log(ret);
  await sleep(1000);
  window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
};
export { issueNewTicket };


async function getTicketIds() {
  // get accounts 
  const accounts = await web3.eth.getAccounts();
  try {
    var ret = await Booking.methods.getTicketIds(accounts[0]).call({
      from: accounts[0]
    });
  } catch (e) {
    console.log(e);
  }
  //console.log(ret);
  return ret;
};
export { getTicketIds };

async function getTicketNumber() {
  // get accounts 
  const accounts = await web3.eth.getAccounts();  
  try {
    var ret = await Booking.methods.getCurrentTicketId().call({
      from: accounts[0]
    });
  } catch (e) {
    console.log(e);
  }
  return ret;
};
export { getTicketNumber };

async function getTicketInfo(id) {
  // get accounts 
  const accounts = await web3.eth.getAccounts();  
  try {
    var ret = await Booking.methods.getTicketInfo(id).call({
      from: accounts[0]
    });
  } catch (e) {
    console.log(e);
  }
  return ret;
};
export { getTicketInfo };

async function getMyTicketIds() {
  // get accounts 
  const accounts = await web3.eth.getAccounts();
  try {
    var ret = await Booking.methods.getReservedTicketIds(accounts[0]).call({
      from: accounts[0]
    });
  } catch (e) {
    console.log(e);
  }
  //console.log(ret);
  return ret;
};
export { getMyTicketIds };

async function reserveTicket(id) {
   // get accounts 
   const accounts = await web3.eth.getAccounts();
   try {
     var ret = await Booking.methods.reserveTicket(id).send({
       from: accounts[0]
     });
   } catch (e) {
     console.log(e);
   }
   //console.log(ret);
   return ret;
};
export { reserveTicket };

// MEMO

/*
  // 最新のブロック番号を取得
  web3.eth.getBlockNumber().then(result => {
    console.log("last block number: ", result);
  });
  web3.eth.getAccounts().then(result => {
    console.log(result);
  })
*/

/*
  var ret = await Booking.methods.getCurrentTicketId().call({
    from: accounts[0]
  });
  console.log(ret);
*/