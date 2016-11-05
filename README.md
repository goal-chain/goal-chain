# goal-chain

```
npm install -g ethereumjs-testrpc
testrpc

npm install -g truffle
truffle init

truffle compile
truffle migrate --reset
truffle serve
```

testrpc --account="0x6fcbe0b5488bd88a840031e006cc39acfe61cc78639cf9f343aa1f1f23b26762,9999999999999999999999999999999999"

<!--

function createGoalAndRetrieve(amount) {
  const metaMaskAccount = '0xcd39209f0BcBC6199779049eb8b0b961B3D885aB';
  var factory = GoalFactory.deployed();
  factory.createGoal('test1',1,1,1,amount,2,{from:metaMaskAccount , gas: 2000000})
    .then(() => factory.goals(metaMaskAccount))
    .then((goalAddress) => {
     const goal = Goal.at(goalAddress);
     return goal.amount()
    }).then(console.log)
}

goal.updateSteps(100, {from: accounts[0], gas: 2000000}).then(() => console.log('success'))

// best practice
goal.updateSteps.call(100, {from: accounts[0], gas: 2000000})
  .then(() => goal.updateSteps(100, {from: accounts[0], gas: 2000000}))
  .then(() => console.log('success'))
  .catch(() => console.log('error'))

goal.state().then(console.log)
-->
