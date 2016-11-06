pragma solidity ^0.4.4;

// import 'Escrow.sol';

contract Goal {
  enum State {Initial, Active, Achieved, Failed}
  State public state;
  address public ownerAddress;
  uint public initialSteps;
  uint public goalSteps;
  uint public completionDate;
  uint public amount;
  string public accessToken;
  address public payoutAddress;
  uint private currentSteps;
  // Escrow public escrow;

  function Goal(address _ownerAddress, string _accessToken, uint _initialSteps, uint _goalSteps, uint _completionDate, uint _amount, address _payoutAddress) {
    state = State.Initial;
    ownerAddress = _ownerAddress;
    accessToken = _accessToken;
    initialSteps = _initialSteps;
    goalSteps = _goalSteps;
    completionDate = _completionDate;
    amount = _amount;
    payoutAddress = _payoutAddress;
//    escrow = new Escrow(_ownerAddress, _payoutAddress);
  }

  function escrow() payable {

  }

  // Checks the % of progress in the goal commitment
  function checkProgress() returns (uint8){
    uint8 progress = (uint8)((currentSteps - initialSteps)/goalSteps) * 100;
    return progress;
  }


  function activate () {
  if(state == State.Initial) {
    if(this.balance >= amount) state = State.Active;
    }
  }

  function updateSteps(uint _currentSteps) {
    currentSteps = _currentSteps;
    if (state == State.Active && (currentSteps >= initialSteps + goalSteps) && now < completionDate) {
      state = State.Achieved;
      bool sentOwner = ownerAddress.send(this.balance);
      /*escrow.cancel(); // I receive my money back!*/
    } else if (state == State.Active && (currentSteps < initialSteps + goalSteps) && now >= completionDate) {
      state = State.Failed;
      /*escrow.release(); // I send the money to the payoutAddress*/
      bool sentPyoutAddr = payoutAddress.send(this.balance);
    }
  }
}
