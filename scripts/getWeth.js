const { getNamedAccounts } = require("hardhat");

//TODO get ABI✅ + Contract Address

async function getWeth() {
    const { deployer } = await getNamedAccounts();
}

module.exports = { getWeth };
