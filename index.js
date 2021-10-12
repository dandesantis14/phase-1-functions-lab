// Code your solution in this file!
function distanceFromHqInBlocks(pickUpBlock){
    return Math.abs(42-pickUpBlock);
}

function distanceFromHqInFeet(pickUpBlock){
    return Math.abs(42-pickUpBlock)*264;
}

function distanceTravelledInFeet(startBlock, endBlock){
    return Math.abs(endBlock-startBlock)*264;
}

function calculatesFarePrice(start, destination){
    const distance = Math.abs(destination-start)*264;
    if (distance<=400){
        return 0;
    } else if(distance<=2000){
        return (distance-400) * 0.02;
    } else if(distance<=2500){
        return 25;
    } else{
        return 'cannot travel that far';
    }
}