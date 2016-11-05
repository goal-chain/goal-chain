module.exports = function(deployer) {
    deployer.deploy(GoalFactory);
    topUpAccount();
};

function topUpAccount() {
    console.log(web3.eth.getAccounts(console.log));
    web3.eth.sendTransaction({
        from: web3.eth.accounts[0],
        to: '0xcd39209f0BcBC6199779049eb8b0b961B3D885aB',
        value: web3.toWei(50, 'ether')},
        console.log);
}
