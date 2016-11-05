pragma solidity ^0.4.4;

contract Goal {
  address public owner;
  uint public currentSteps;
  uint public goalSteps;
  uint public completionDate;
  uint public amount;
  string public accessToken;
  address public payoutAddress;

  function createGoal(string _accessToken, uint _currentSteps, uint _goalSteps, uint _completionDate, uint _amount, address _payoutAddress) {
    owner = msg.sender;
    accessToken = _accessToken;
    currentSteps = _currentSteps;
    goalSteps = _goalSteps;
    completionDate = _completionDate;
    amount = _amount;
    payoutAddress = _payoutAddress;
  }
}
