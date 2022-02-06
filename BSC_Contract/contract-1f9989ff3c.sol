// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "@openzeppelin/contracts@4.3.2/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts@4.3.2/token/ERC20/extensions/ERC20Burnable.sol";

contract SuckerCoin is ERC20, ERC20Burnable {
    constructor() ERC20("Sucker Coin", "SUCKER") {
        _mint(msg.sender, 1000000000 * 10 ** decimals());
    }
}
