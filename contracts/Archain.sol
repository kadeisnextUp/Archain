
// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.21;


import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Archain is ERC20 {
    constructor(uint256 initialSupply) ERC20("Archain", "ARCH") {
        _mint(msg.sender, initialSupply);
    }
}
