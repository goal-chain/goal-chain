pragma solidity ^0.4.4;

import 'Escrow.sol';

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
  uint private currentSteps;
  Escrow public escrow;

  function Goal(address _ownerAddress, string _accessToken, uint _initialSteps, uint _goalSteps, uint _completionDate, uint _amount, address _payoutAddress) {
    state = State.Active;
    ownerAddress = _ownerAddress;
    accessToken = _accessToken;
    initialSteps = _initialSteps;
    goalSteps = _goalSteps;
    completionDate = _completionDate;
    amount = _amount;
    payoutAddress = _payoutAddress;
    escrow = new Escrow(_ownerAddress, _payoutAddress);
  }

  function checkProgress(){
    //uint8 progress = 
  }


  function updateSteps(uint _currentSteps) {
    currentSteps = _currentSteps;
    if (state == State.Active && (currentSteps >= initialSteps + goalSteps) && now < completionDate) {
      state = State.Achieved;
    } else if (state == State.Active && (currentSteps < initialSteps + goalSteps) && now >= completionDate) {
      state = State.Failed;
    }

  }
}
