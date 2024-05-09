pragma solidity ^0.5.4;

contract List {

    event taskAdded(string _content, uint _id);

    Task[] public TaskList;
    mapping (address => uint) public ownerToTask;

    struct Task {
        string content;
        string id;
    }

    function _generateTaskId(string _content) internal returns (uint) {
        uint _id = keccak256(abi.encodePacked(_content));
        return _id;
    }

    function createTask(string storage _content) public {
        uint _id = _generateTaskId(_content) % 16;
        Task myTask = Task(_content, _id);
        TaskList.push(myTask);
        emit taskAdded(_content, _id);
    }
}