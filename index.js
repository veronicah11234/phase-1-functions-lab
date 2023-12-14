function distanceFromHqInBlocks(pickupLocation) {
    const hqLocation = 42;
    return Math.abs(pickupLocation - hqLocation);
  }
  
  function distanceFromHqInFeet(pickupLocation) {
    const feetPerBlock = 264;
    return distanceFromHqInBlocks(pickupLocation) * feetPerBlock;
  }
  
  function distanceTravelledInFeet(start, destination) {
    const feetPerBlock = 264;
    return Math.abs(destination - start) * feetPerBlock;
  }
  
  const pickupLocation = 50;
  const startBlock = 34;
  const destinationBlock = 38;
  
  console.log(distanceFromHqInBlocks(pickupLocation)); 
  console.log(distanceFromHqInFeet(pickupLocation));  
  console.log(distanceTravelledInFeet(startBlock, destinationBlock)); 

  


function calculatesFarePrice(start, destination) {
    const feetPerBlock = 264;
    const distance = Math.abs(destination - start) * feetPerBlock;
  
    if (distance <= 400) {
      return 0;
    }else if (distance <= 2000) {
      return (distance - 400) * 0.02;
    } else if (distance <= 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
    }
  }
  
 
  