const { expect } = require("chai");

describe("MyContract", function () {
  let myContract;

  beforeEach(async function () {
    const MyContract = await ethers.getContractFactory("MyContract");
    myContract = await MyContract.deploy();
    await myContract.deployed();
  });

  it("should deploy MyContract", async function () {
    expect(myContract.address).to.not.equal(0);
  });

  // Add more tests here

});