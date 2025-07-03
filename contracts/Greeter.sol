// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

contract Greeter {
    string private greeting;
    string private name;

    constructor(string memory _name) {
        name = _name;
        greeting = "Hello";
    }

    function greet() public view returns (string memory) {
        return string(abi.encodePacked(greeting, ", ", name, "!"));
    }

    function setGreeting(string memory _greeting) public {
        greeting = _greeting;
    }

    function getName() public view returns (string memory) {
        return name;
    }
}