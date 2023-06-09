const { getNamedAccounts, ethers } = require("hardhat");

//TODO get ABI✅ + Contract Address✅
// address: 0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2

async function getWeth() {
    const { deployer } = await getNamedAccounts();

    const iWeth = await ethers.getContractAt(
        "IWETH",
        "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
        deployer
    );
}

module.exports = { getWeth };
