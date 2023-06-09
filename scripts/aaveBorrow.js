const { getWeth } = require("./getWeth");
const { getNamedAccounts } = require("hardhat");

async function main() {
    await getWeth();
    const { deployer } = await getNamedAccounts();
    // Lending Pool Address Provider: 0xB53C1a33016B2DC2fF3653530bfF1848a515c8c5
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
