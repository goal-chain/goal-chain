pragma solidity ^0.4.4;

import 'Goal.sol';

contract GoalFactory {
    mapping(address => address) public goals;

    function createGoal(string _accessToken, uint _currentSteps, uint _goalSteps, uint _completionDate, uint _amount, address _payoutAddress) {
        address owner = msg.sender;
        Goal goal = new Goal(owner, _accessToken, _currentSteps, _goalSteps, _completionDate, _amount, _payoutAddress);
        goals[owner] = goal;
    }
 }
