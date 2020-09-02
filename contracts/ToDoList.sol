// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.8.0;

contract ToDoList {
    uint taskCount = 0;

    function addTaskCount() public {
        taskCount += 1;
    }

    function getTaskCount() public view returns (uint) {
        return taskCount;
    }

    struct Task {
        uint id;
        string content;
        bool completed;
    }

    mapping(uint => Task) public tasks;

    event TaskCreated(
        uint id,
        string content,
        bool completed
    );

    constructor() public {
        createTask("Check out dappuniv");
    }

    function createTask(string memory _content) public {
        addTaskCount();
        tasks[getTaskCount()] = Task(getTaskCount(), _content, false);
        emit TaskCreated(getTaskCount(), _content, false);
    }
}
