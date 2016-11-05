pragma solidity ^0.4.4;

contract Goal {
  enum State {Active, Achieved, Failed, Closed}
  State public state;
  address public ownerAddress;
  uint public initialSteps;
  uint public goalSteps;
  uint public completionDate;
  uint public amount;
  string public accessToken;
  address public payoutAddress;

  function Goal(address _ownerAddress, string _accessToken, uint _initialSteps, uint _goalSteps, uint _completionDate, uint _amount, address _payoutAddress) {
    state = State.Active;
    ownerAddress = _ownerAddress;
    accessToken = _accessToken;
    initialSteps = _initialSteps;
    goalSteps = _goalSteps;
    completionDate = _completionDate;
    amount = _amount;
    payoutAddress = _payoutAddress;
  }

  function updateSteps(uint currentSteps) {
    if (state == State.Active && (currentSteps >= initialSteps + goalSteps) && now < completionDate) {
      state = State.Achieved;
    } else if (state == State.Active && (currentSteps < initialSteps + goalSteps) && now >= completionDate) {
      state = State.Failed;
    }
  }
}
