//import { ethers } from "hardhat";

// async function main() {
//   const currentTimestampInSeconds = Math.round(Date.now() / 1000);
//   const unlockTime = currentTimestampInSeconds + 60;

//   const lockedAmount = ethers.parseEther("0.001");

//   const lock = await ethers.deployContract("Lock", [unlockTime], {
//     value: lockedAmount,
//   });

//   await lock.waitForDeployment();

//   console.log(
//     `Lock with ${ethers.formatEther(
//       lockedAmount
//     )}ETH and unlock timestamp ${unlockTime} deployed to ${lock.target}`
//   );
// }

// // We recommend this pattern to be able to use async/await everywhere
// // and properly handle errors.
// main().catch((error) => {
//   console.error(error);
//   process.exitCode = 1;
// });

import { ethers } from "hardhat";

async function main() {

  const IjayToken = await ethers.deployContract("IjayToken");

  await IjayToken.waitForDeployment();


  const stakingToken = await ethers.deployContract("IjayToken");

  await stakingToken.waitForDeployment();



  const stakeERC20 = await ethers.deployContract("StakeERC20",[IjayToken.target, stakingToken.target]);

  await stakeERC20.waitForDeployment();

  console.log(
    `Staking Token contract deployed to ${stakeERC20.target}`
  );
  console.log(
    `Ijay Token contract deployed to ${IjayToken.target}`
  );
  console.log(
    `Reward Token contract deployed to ${stakingToken.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});