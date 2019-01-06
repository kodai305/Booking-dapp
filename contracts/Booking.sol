pragma solidity ^0.5.0;

contract Booking {
    uint ticketId;         //チケットの発行番号
    struct Ticket {
        address issuer;       //チケットの発行者
        string  ticketName;   //チケット名
        string  eventInfo;    //イベント内容
        address owner;
        string  status;
    }
    uint256 reservedId;
    Ticket[] tickets;
    mapping (address => uint256[]) ticketIds; //チケットの連想配列
    mapping (address => uint256[]) reservedIds; //チケットの連想配列
    //mapping(uint => Ticket) tickets;
    
    constructor() public {
        // コンストラクタ
    }

    // チケットを発行する
    function issueTicket(string memory _ticketName, string memory _eventInfo) public returns (uint256) {
        address def;
        address _issuer = msg.sender;
        Ticket memory ticket = Ticket({
           issuer: _issuer,
           ticketName: _ticketName,
           eventInfo: _eventInfo,
           owner: def,
           status: "new"
        });
        uint256 newId = tickets.push(ticket) - 1;            
        ticketIds[_issuer].push(newId);
        return newId;
    }
    
    // チケット一覧を取得
    function getTicketIds(address _owner) public view returns(uint256[] memory ids) {
        return (ticketIds[_owner]);
    }
    
    function getReservedTicketIds(address _owner) public view returns(uint256[] memory ids) {
        return (reservedIds[_owner]);
    }

    // 現在のチケット発行番号を取得（参照）する
    function getCurrentTicketId() view public returns (uint) {
        return tickets.length;
    }
    
    // チケットの情報を取得（参照）する
    function getTicketInfo(uint _ticketId) public view returns(address, string memory ticketName, string memory eventInfo, address, string memory status) {
        return (
            tickets[_ticketId].issuer,
            tickets[_ticketId].ticketName,
            tickets[_ticketId].eventInfo,
            tickets[_ticketId].owner,
            tickets[_ticketId].status
        );
    }
    
    // チケットを予約する
    function reserveTicket(uint _ticketId) public {
        // XXX: check ticket is not reserved
        Ticket memory _ticket = tickets[_ticketId];
        _ticket.owner  = msg.sender;
        _ticket.status = "reserved";
        
        tickets[_ticketId] = _ticket;
        reservedIds[msg.sender].push(_ticketId);
    }
    
    // イベント参加済にする(発行者しかできない)
    function approveToParticipate(uint _ticketId) public {
        require(tickets[_ticketId].issuer == msg.sender);
        require(keccak256(abi.encodePacked(tickets[_ticketId].status)) == keccak256(abi.encodePacked("reserved")));

        Ticket memory _ticket = tickets[_ticketId];
        _ticket.status = "done";
        tickets[_ticketId] = _ticket;
    }
}