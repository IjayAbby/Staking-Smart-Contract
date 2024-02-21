// SPDX-License-Identifier: MIT

pragma solidity ^0.8.21;

interface IStakeERC20 {
    function stake(uint256 _amount) external;
    function approve(address spender, uint256 value) external returns (bool);
    function balanceOf(address account) external view returns (uint256);

}
