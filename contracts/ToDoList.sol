// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.8.0;

contract ToDoList {
    uint taskCount = 0;

    function addTaskCount() public {
        taskCount += 1;
    }

    function get() public view returns (uint) {
        return taskCount;
    }
}
