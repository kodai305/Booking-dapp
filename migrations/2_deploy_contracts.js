//var Booking = artifacts.require('../contracts/Booking.sol')
var Booking = artifacts.require('./Booking.sol')

module.exports = function(deployer) {
    deployer.deploy(Booking);
};


