// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract ClimateRewards is ERC721, Ownable {
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIdCounter;

    constructor() ERC721("Climate Guardians Reward", "CGR") {}

    function _baseURI() internal pure override returns (string memory) {
        return "https://ipfs.moralis.io:2053/ipfs/QmQTjiQALcB4rvkgS13XQXRbyvb1aGJUGXtygRxzN8rTzr/metadata/";
    }

    function safeMint(address to) public payable {
        require(msg.value == 0.01 ether, 'Need to send 0.01 ETH');
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(to, tokenId);
    }

    /**
    * @dev Returns an URI for a given token ID
    */
    function tokenURI(uint256 _tokenId) public pure override returns (string memory) {
    return string( abi.encodePacked(
        abi.encodePacked( _baseURI(), Strings.toString(_tokenId)),
        ".json"
        ));
    }
}