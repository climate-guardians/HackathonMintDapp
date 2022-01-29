// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

//import 1155 token contract from Openzeppelin
import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ClimateRewardNftV2 is ERC1155, Ownable {
    using SafeMath for uint256;

    uint256 public constant RANDOM = 0;

    constructor()
        ERC1155(
            "ipfs://QmYkvJfeGW1LHp8VZvPp4pUxHqi6ZXz5NdkNWwrUwVpvdx/metadata/{id}.json" // You can get this saved in dasboard of your Moralis server instance.
        )
    {
        // account, token_id, number
        _mint(msg.sender, RANDOM, 1, "");
        _mint(msg.sender, RANDOM, 1, "");
        _mint(msg.sender, RANDOM, 1, "");
    }

    function mint(uint256 id, uint256 amount)
        public
        payable
    {
        require(msg.value == 0.01 ether, 'Need to send 0.01 ETH');
        _mint(msg.sender, id, amount, "");
    }
}