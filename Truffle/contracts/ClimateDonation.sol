// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;


contract ClimateDonation {

    address payable owner;

    constructor() {
         owner = payable(msg.sender);
     }

     event Donate (
        address from,
        uint256 amount,
        string messge
     );

    function newDonation(string memory note) public payable{
        (bool success,) = owner.call{value: msg.value}("");
        require(success, "Failed to donate to the Amazon");
        emit Donate(
            msg.sender,
            msg.value,
            note

        );
    } 

}