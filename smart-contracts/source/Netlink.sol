// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.4.0
pragma solidity ^0.8.27;

import {ERC20} from "@openzeppelin/contracts@5.4.0/token/ERC20/ERC20.sol";
import {ERC20Burnable} from "@openzeppelin/contracts@5.4.0/token/ERC20/extensions/ERC20Burnable.sol";
import {ERC20Permit} from "@openzeppelin/contracts@5.4.0/token/ERC20/extensions/ERC20Permit.sol";

contract Netlink is ERC20, ERC20Burnable, ERC20Permit {
    constructor(address recipient)
        ERC20("Netlink", "NET")
        ERC20Permit("Netlink")
    {
        _mint(recipient, 99000000 * 10 ** decimals());
    }
}
