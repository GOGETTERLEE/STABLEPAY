// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;


contract Cards{
    
    struct Card {
        string name;
        uint color;
        uint date;
    }

    struct Transaction{
        address from;
        address to;
        uint amount;
        uint time;
    }
    Transaction[] transactions;
    mapping (string => bool) isUsed;

    mapping (string => address) nameToOwner;
    mapping (address => Card[]) indCardList;
    uint totalCount;
    function getCardName(address adr) external view returns(string memory)
    {
       
        if(indCardList[adr].length == 0) return "-1";
        else
        return indCardList[adr][0].name;
    }
    function getAllTransaction() external view returns(Transaction[] memory){
        return transactions;
    }

    function send(uint amount, string memory _to) payable public{
        address payable to = payable( nameToOwner[_to]);
        to.send(amount);
        transactions.push(Transaction(msg.sender, nameToOwner[_to], amount, block.timestamp));
    }

    function setCard(string memory name) external {
        require(nameToOwner[name] == msg.sender);
        uint length = indCardList[msg.sender].length;
        for(uint i = 0; i < length; i++)
        {
            if(keccak256(abi.encodePacked(indCardList[msg.sender][i].name)) == keccak256(abi.encodePacked(name)))
            {
                Card memory firstCard = indCardList[msg.sender][0];
                indCardList[msg.sender][0] = indCardList[msg.sender][i];
                indCardList[msg.sender][i] = firstCard;
                break;
            }
        }
    }
    function isBeingUsed(string memory name) external view returns (bool) {
        return isUsed[name];
    }
    function mint(string memory _name, uint _color) public {
        require(!isUsed[_name]);
        totalCount += 1;
        isUsed[_name] = true;
        indCardList[msg.sender].push(Card(_name, _color, block.timestamp));
        nameToOwner[_name] = msg.sender;
    }
    function showAllCard() public view returns (Card[] memory) {
        return indCardList[msg.sender];
    }
    function balanceOf(address _owner) external view returns (uint256) {
        return indCardList[_owner].length;
    }

    function ownerOf(string calldata _name) external view returns (address) {
        return nameToOwner[_name];
    }

    function transfer(string calldata _to, string calldata _name) external payable {
        uint length = indCardList[msg.sender].length;
        for(uint i = 0; i < length; i++)
        {
            if(keccak256(abi.encodePacked(indCardList[msg.sender][i].name)) == keccak256(abi.encodePacked(_name)))
            {
                indCardList[msg.sender][i] = indCardList[msg.sender][length-1];
                indCardList[nameToOwner[_to]].push(indCardList[msg.sender][length-1]);
                indCardList[msg.sender].pop();
                break;
            }
        }
        nameToOwner[_name] = nameToOwner[_to];
    }

    
}
