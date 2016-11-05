pragma solidity ^0.4.4;

contract Goal {
  enum State {Active, Achieved, Failed, Closed}
  State state;
  address public ownerAddress;
  uint public currentSteps;
  uint public goalSteps;
  uint public completionDate;
  uint public amount;
  string public accessToken;
  address public payoutAddress;

  function Goal(address _ownerAddress, string _accessToken, uint _currentSteps, uint _goalSteps, uint _completionDate, uint _amount, address _payoutAddress) {
    state = State.Active;
    ownerAddress = _ownerAddress;
    accessToken = _accessToken;
    currentSteps = _currentSteps;
    goalSteps = _goalSteps;
    completionDate = _completionDate;
    amount = _amount;
    payoutAddress = _payoutAddress;
  }

  // oraclize schedler setup


 // updateSteps(latesSteps)
  // if (latestSteps > currentSteps + goalSteps)
   // // check date
    //// // achived
    /// else failed
}
