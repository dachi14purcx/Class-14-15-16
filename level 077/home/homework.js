// 1
function cubeChecker(volume, side){
    if (volume > 0 && side > 0 && volume / side == side * side){
      return true
    } else {
      return false
    }
};

// 2
const areaOrPerimeter = function(l , w) {
    if (l == w) {
      return l * w
    } else {
      return (l + w) * 2
    }
};

// 3
function opposite(number) {
    return -number
}

// 4
function boolToWord( bool ){
    if (bool == true) {
      return 'Yes'
    } else {
      return 'No'
    }
}

// 5
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    if (fuelLeft * mpg >= distanceToPump){
      return true
    } else {
      return false
    }
};