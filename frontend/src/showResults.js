import web3 from './utils/myweb3';
import Booking from './utils/Booking';

//function createInstance() {
//  var instance = new web3.eth.Contract(contractABI, contractAddress);
//}
/*
function issueTicket(values) {
  var title = values.title;
  var description = values.description;
  console.log(title,description);
  instance.methods.issueTicket(title, description).call(function (error, result) {
    if (error) { console.log(error); }
    if (result) {
      console.log("result: ");
      console.log(result);
    }
  });
}

function getCurrentTicketId() {
  instance.methods.getCurrentTicketId().call(function (error, result) {
    if (error) { console.log(error); }
    if (result) {
      console.log("result: ");
      console.log(result);
    }
  });
}
*/
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
export default (async function showResults(values) {
  ///const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    
  // 最新のブロック番号を取得
  web3.eth.getBlockNumber().then(result => {
    console.log("last block number: ", result);
  });

  web3.eth.getAccounts().then(result => {
    console.log(result);
  })

  //const instance = new web3.eth.Contract(contractABI, contractAddress);
  const instance = Booking;
  console.log(instance);
  
  var title = values.title;
  var description = values.description;

  const accounts = await web3.eth.getAccounts();
  var ret = await Booking.methods.getCurrentTicketId().call({
      from: accounts[0]
  });
  console.log(ret);

  console.log("calling getTicketInfo: ");
  ret = await Booking.methods.getTicketInfo(7).call({
    from: accounts[0]
  });
  console.log(ret.ticketName);

  try {
    ret = await Booking.methods.issueTicket(title, description).send({
      from: accounts[0]
    });
  }
  catch (e) {
    console.log("error!!!!!")
    console.log(e);
  }
  console.log(ret);
  

  /*
  instance.methods.getCurrentTicketId().call(function (error, result) {
    if (error) { console.log(error); }
    if (result) {
      console.log("result: ");
      console.log(result);
      window.alert(`done`);
    }
  });
  */
  //web3.eth.accounts().call(function (error, result){ console.log(result) })
  /*
  // for contract 
  web3.eth.getAccounts((error, result) => {
    console.log(result)
  });

  web3.eth.getBlock(0, (error, result) => {
    console.log(result);
  });
  */
  //createInstance();
  
  //getCurrentTicketId();
  
  //issueTicket(values);
  
  await sleep(5000);
  window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
});