const { getNamedAccounts, ethers } = require("hardhat");

//TODO get ABI✅ + Contract Address✅
// address: 0x9a116E22E1247B8cbEb4693B2BcF20c21C477394

const AMOUNT = ethers.utils.parseEther("0.02");

async function getWeth() {
    const { deployer } = await getNamedAccounts();

    const iWeth = await ethers.getContractAt(
        "IWETH",
        "0x9a116E22E1247B8cbEb4693B2BcF20c21C477394",
        deployer
    );
    const tx = await iWeth.deposit({ value: AMOUNT });
    await tx.wait(1);
    const wethBalance = await iWeth.balanceOf(deployer);

    console.clear();
    console.log(`WETH balance: ${ethers.utils.formatEther(wethBalance)}`);
}

module.exports = { getWeth };
