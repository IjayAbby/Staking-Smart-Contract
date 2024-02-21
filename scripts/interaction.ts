import { ethers } from "hardhat";

async function main() {

 
  const stakeERC20 = "0xAB12eB9f068b4E0F217b27823081D19EbCf1ada7";

  const IjayToken = "0xD134689e516380Bfa4B99dcDB99a1344907AC4c8";
  //const rewardToken = "0x4C3b7571425918393d5745eD64a19f91863a4B5E";

  const STAKEERC20 = await ethers.getContractAt("IStakeERC20", stakeERC20);

  const _ijayToken = await ethers.getContractAt("IStakeERC20", IjayToken);
  await _ijayToken.waitForDeployment();

  const  _approveToken = await _ijayToken.approve(stakeERC20, 10000);
  await _approveToken.wait();

  
  const createWalletTx = await STAKEERC20.stake(10000);
  await createWalletTx.wait();

  const _balance = await STAKEERC20.balanceOf(stakeERC20);
  console.log(_balance); 

//function balanceOf(address account) external view returns (uint256);

  

//   const clones = await MULTISIGFACTORY.getMultiSigClones();

//   console.log(clones);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});