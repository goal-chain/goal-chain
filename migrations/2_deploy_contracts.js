module.exports = function(deployer) {
    deployer.deploy(Goal);
    topUpAccount();
};

function topUpAccount() {
    console.log(web3.eth.getAccounts(console.log));
    web3.eth.sendTransaction({
        from: web3.eth.accounts[0],
        to: '0x4327c69A1bED9f295b22e7A5D56581d32299a419',
        value: web3.toWei(50, 'ether')},
        console.log);
}
