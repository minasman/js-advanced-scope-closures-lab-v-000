function produceDrivingRange(range){
    return function(start, finish){
        let block1 = parseInt(start);
        let block2 = parseInt(finish);
        traveledRange = block2 - block1;
        if (traveledRange > range) {
            return traveledRange.toString() - range + ' blocks out of range';
        } else {
            return 'within range by ' + (range - traveledRange).toString();
        }
    };
}

function produceTipCalculator(tip){
    return function(bill){
        return (tip * bill);
    }
}

function createDriver() {
    let driverId = 0
    return class Driver{
      constructor(name){
        this.name = name
        this.id = ++driverId
      }
    }
  }