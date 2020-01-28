function produceDrivingRange(blockRange) {
  return function(startBlock, endBlock) {
    let absBlockDist;
    let start = parseInt(startBlock);
    let end = parseInt(endBlock);

    absBlockDist = Math.abs(end - start);

    if (absBlockDist > blockRange) {
      let difference = absBlockDist - blockRange;
      return `${difference} blocks out of range`;
    } else if (absBlockDist < blockRange) {
      let difference = blockRange - absBlockDist;
      return `within range by ${difference}`;
    };
  };
};

function produceTipCalculator(percent) {
  return function(fare) {
    let tip = parseFloat(percent);
    let total;

    total = (fare * tip);
    return total;
  };
};

function createDriver() {
  let DriverId = 0;
  return class {
    constructor(name) {
      this.name = name;
      this.id = ++DriverId;
    }
  }
}