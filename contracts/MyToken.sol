// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract IjayToken is ERC20, Ownable {

    constructor()
        ERC20("IjayTokenToken", "IJX")
        Ownable(msg.sender)
    {
        mint(msg.sender, 30000000000 * 10 ** 18);
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}