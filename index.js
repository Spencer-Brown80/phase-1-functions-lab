const hq = 42;
const blockLength = 264;

function distanceFromHqInBlocks(location) {
    return Math.abs(hq - location);
}

function distanceFromHqInFeet(location) {
    const blocks = distanceFromHqInBlocks(location);
    return blocks * blockLength;
}

function distanceTravelledInFeet(start, destination) {
    return (Math.abs(start - destination)) * blockLength;


}

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    
    if (distance <= 400) {
      return 0;
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * .02;   
    } else if (distance > 2000 && distance <=2500) {
      return 25;
    } else {
       return "cannot travel that far";
    }   
}    

