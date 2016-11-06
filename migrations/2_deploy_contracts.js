module.exports = function(deployer) {
    deployer.deploy(GoalFactory);
    topUpAccount();
};

function topUpAccount() {
    console.log(web3.eth.getAccounts(console.log));
    web3.eth.sendTransaction({
        from: '0x4ee914361cce1b654446a4faf8885d179a996e02',
        to: '0xcd39209f0BcBC6199779049eb8b0b961B3D885aB',
        value: web3.toWei(5, 'ether')},
        console.log);
}
