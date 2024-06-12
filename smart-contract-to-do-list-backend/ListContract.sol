pragma solidity ^0.5.4;

// all of this code is based off of lessons 1 and 2 on CryptoZombies: https://cryptozombies.io/en/lesson/1/

contract List {

    event taskAdded(string _content, uint _id);

    Task[] public TaskList;
    mapping (uint => address) public TaskToOwner; // maps task id to the address of msg.sender
    mapping (address => uint) public OwnerToTaskCount; // maps address of msg.sender to number of tasks they have
    struct Task {
        string content;
        string id;
    }

    // generate task id
    function _generateTaskId(string _content) internal returns (uint) {
        uint _id = keccak256(abi.encodePacked(_content));
        return _id;
    }

    function createTask(string storage _content) public {
        uint _id = _generateTaskId(_content) % 16; // run _generateTaskId() and assign result to _id
        TaskToOwner(_id, msg.sender); // declares msg.sender as owner of the task id just created
        Task myTask = Task(_content, _id); // creates task, passing in content and _id params
        TaskList.push(myTask); // push to the TaskList array
        emit taskAdded(_content, _id); // emits content of task and id for front-end to read
    }
}