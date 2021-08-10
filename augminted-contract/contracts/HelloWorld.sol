// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract HelloWorld {
    constructor() public {}

    event MessageSaid(address _sender, string _message);

    function say(string memory _message) public {
        emit MessageSaid(msg.sender, _message);
    }
}
