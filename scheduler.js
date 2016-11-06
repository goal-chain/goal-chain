var CronJob = require('cron').CronJob;
const GoalFactory = require('./build/contracts/GoalFactory.sol.js'); 
const Goal = require('./build/contracts/Goal.sol.js'); 
const Web3 = require('web3');
const provider = new Web3.providers.HttpProvider("http://localhost:8545");
const web3 = new Web3(provider);
const axios = require('axios');
GoalFactory.setProvider(provider);
Goal.setProvider(provider);
const goalFactory = GoalFactory.deployed(); 

new CronJob('*/24 * * * * *', function() {
  console.log('You will see this message every second');
  axios.get('https://calm-reaches-82247.herokuapp.com/getsteps/eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyUU02TTkiLCJhdWQiOiIyMjdYSjMiLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJyYWN0IiwiZXhwIjoxNDc4OTUwNjg0LCJpYXQiOjE0NzgzODg2MDZ9.RUb-YoIE0m9hhTRDuT_0JVtAqzdI5Jbiy8ntw72g8M0')
    .then(result => console.log(result.data.steps));

}, null, true, 'America/Los_Angeles');


const retrieveAllExistingGoals = () => {
  const Unicef = '0x00219e9bff127d11da668ca92c0598c77e9f3e51';
  const AmnestyInternational =  '0xbde95d88cd32cdf46ed3d460edc940f523094445';
  const Sean =  '0x3c7904ff18c35f4faf721c858098e77a5329ccba';
  const Tom = '0xea7aa782bbcdaacb38fd4d49075b07fe02c036f6';

  const addresses = [Unicef, AmnestyInternational, Sean, Tom];
  // goalFactory.goals(Unicef).then(console.log).catch(console.log)
  Promise.all(addresses.map(address => goalFactory.goals(address)))
    .then((addresses) => {
      const goals = addresses.map(address => Goal.at(address));
      return Promise.all(goals.map(goal => goal.goalSteps()));
    })
    .then(console.log)
    .catch(console.log);
}