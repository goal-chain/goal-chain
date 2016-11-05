let accounts;
let account;

const createGoalAndRetrieve = (accessToken, currentSteps, initialSteps, goalSteps, completionDate, amount, payoutAddress) => {
  const metaMaskAccount = '0xcd39209f0BcBC6199779049eb8b0b961B3D885aB';
  const MAX_GAS_LIMIT = 2000000
  let factory = GoalFactory.deployed();

  factory.createGoal(accessToken, currentSteps, initialSteps, goalSteps, completionDate, amount, payoutAddress,
    { from: metaMaskAccount, gas: MAX_GAS_LIMIT })
    .then(() => factory.goals(metaMaskAccount))
    .then((goalAddress) => {
      const goal = Goal.at(goalAddress);
      console.log(`goalAddress=${goalAddress}|state=${goal.state().then(console.log)}`)
      return goal;
    })
    .catch(console.error)
};

window.onload = function() {
  web3.eth.getAccounts(function(err, accs) {
    if (err != null) {
      alert("There was an error fetching your accounts.");
      return;
    }

    if (accs.length == 0) {
      alert("Couldn't get any accounts! Make sure your Ethereum client is configured correctly.");
      return;
    }

    accounts = accs;
    account = accounts[0];
  });
}

window.createGoalAndRetrieve = createGoalAndRetrieve;
