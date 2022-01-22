// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Burnable.sol";

/// @custom:security-contact coups@climateguardians.io
contract ClimateHeroV4 is ERC1155, Ownable, Pausable, ERC1155Burnable {

    uint256 public constant CURUPIRA = 0;
    uint256 public constant NAIARA = 1;
    uint256 public constant BOLSO = 2;

    constructor() ERC1155("https://occazwotq257.usemoralis.com/{id}.json") {
      _mint(msg.sender, CURUPIRA, 1, "");
      _mint(msg.sender, NAIARA, 2, "");
      _mint(msg.sender, BOLSO, 3, "");
    }

    function setURI(string memory newuri) public onlyOwner {
        _setURI(newuri);
    }

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

    function mint(uint256 id, uint256 amount)
        public
        payable
    {
        require(msg.value == 0.1 ether, 'Need to send 0.1 ETH');
        _mint(msg.sender, id, amount, "");
    }

    function _beforeTokenTransfer(address operator, address from, address to, uint256[] memory ids, uint256[] memory amounts, bytes memory data)
        internal
        whenNotPaused
        override
    {
        super._beforeTokenTransfer(operator, from, to, ids, amounts, data);
    }
}