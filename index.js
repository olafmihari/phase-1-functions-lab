// Code your solution in this file
function distanceFromHqInBlocks(distance){
    let blocks;
    if (distance > 42)
        blocks = distance - 42;
    else
        blocks = 42 - distance;
    return blocks;
}


function distanceTravelledInFeet(start, end){
    let feet;
       if (start > 42){
        start = (start - 42)*264;
        end = (end - 42)*264;
        feet = end - start;
    }
    else{
        start = (42 - start)*264;
        end = (42 - end)*264;
        feet = end - start;
    }
    return feet;
}

function calculatesFarePrice(start, destination){
    let feet, charge;
    if (start > 42){
        start = (start - 42)*264;
        destination = (destination - 42)*264;
        feet = destination - start;
    }
    else{
        start = (42 - start)*264;
        destination = (42 - destination)*264;
        feet = destination - start;
    }

    if (feet<=400){
        charge = 0
    }else if (feet > 400 && feet < 2000){
        charge  = (feet - 400)*0.02
    }else if(feet > 2000 && feet < 2500){
        charge = 25;
    }else{
        charge = "cannot travel that far"
    }

    return charge;
}

function distanceFromHqInFeet(distance){
    let feet;
    if (distance > 42)
        feet = (distance - 42)*264;
    else
        feet = (42 - distance)*264;
    return feet;
}