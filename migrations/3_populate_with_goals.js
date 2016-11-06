
const randomRange = (ceiling, floor) =>  {
    return  Math.floor(Math.random() * ceiling) + floor; 
}

const createGoalAndRetrieve = (accountAdd, accessToken, currentSteps, goalSteps, completionDate, amount, payoutAddress) => {
    const MAX_GAS_LIMIT = 2000000;
    const factory = GoalFactory.deployed();

    return factory
        .createGoal(accessToken, currentSteps, goalSteps, completionDate, amount, payoutAddress, { from: accountAdd, gas: MAX_GAS_LIMIT })
        .catch(console.error)
};

module.exports = function(deployer) {
    const Unicef = '0x00219e9bff127d11da668ca92c0598c77e9f3e51';
    const AmnestyInternational =  '0xbde95d88cd32cdf46ed3d460edc940f523094445';
    const Sean =  '0x3c7904ff18c35f4faf721c858098e77a5329ccba';
    const Tom = '0xea7aa782bbcdaacb38fd4d49075b07fe02c036f6';
    const metaMaskAccount = '0xcd39209f0BcBC6199779049eb8b0b961B3D885aB';    

    const addresses = [Unicef, AmnestyInternational, Sean, Tom];
    const token = 'token';

    const Hour = 3.6e+6;
    const Day = 8.64e+7;
    addresses.map((address, index) => {
        return createGoalAndRetrieve(
            address, 
            `${token}-${index}`, 
            randomRange(1000, 100) , 
            randomRange(10000, 1000),
            randomRange(Date.now() + Day, Date.now() + Hour),
            randomRange(10, 1),
            addresses.filter((add) => address != add)[randomRange(2,0)] );
    });





};