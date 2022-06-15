// Code your solution in this file!
// const returnFirstTwoDrivers= function(drivers){
//     const newDrivers= drivers.slice(0,2)
//     return newDrivers;
// }

// const returnLastTwoDrivers= function(drivers) {
//     return drivers.slice(-2)
// }
//   const selectingDrivers=[returnFirstTwoDrivers, returnLastTwoDrivers]

// const createFareMultiplier= function(multiplierFactor){
   
//     return function(fareFactor){
//         return fareFactor*multiplierFactor
//     }
// }
//  const fareDoubler=createFareMultiplier(2)
//  const fareTripler=createFareMultiplier(3)


//  const selectDifferentDrivers= function (drivers, returnedDrivers){
//     return returnedDrivers(drivers)
//  }
 
const returnFirstTwoDrivers= function (arrayOfDrivers){
  return arrayOfDrivers.slice(0,2)
}

const returnLastTwoDrivers= function (arrayOfDrivers){
    return arrayOfDrivers.slice(Math.max(arrayOfDrivers.length -2,0))
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

//*** function createFareMultiplier(integer){
//  return newFare 
// }

// const newFare= function fareAmount(fare){
//    return fare**integer}

const fareDoubler=createFareMultiplier(2)