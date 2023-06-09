const { getNamedAccounts, ethers } = require("hardhat");

//TODO get ABI✅ + Contract Address✅
// address: 0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2

const AMOUNT = ethers.utils.parseEther("0.02");

async function getWeth() {
    const { deployer } = await getNamedAccounts();

    const iWeth = await ethers.getContractAt(
        "IWETH",
        "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
        deployer
    );
    const tx = await iWeth.deposit({ value: AMOUNT });
    await tx.wait(1);
    const wethBalance = await iWeth.balanceOf(deployer);
    console.log(`WETH balance: ${ethers.utils.formatEther(wethBalance)}`);
}

module.exports = { getWeth };
