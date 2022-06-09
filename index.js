// Code your solution in this file!
const returnFirstTwoDrivers= function(drivers){
    const newDrivers= drivers.slice(0,2)
    return newDrivers;
}

const returnLastTwoDrivers= function(drivers) {
    return drivers.slice(-2)
}
  const selectingDrivers=[returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier= function(multiplierFactor){
   
    return function(fareFactor){
        return fareFactor*multiplierFactor
    }
}
 const fareDoubler=createFareMultiplier(2)
 const fareTripler=createFareMultiplier(3)


 const selectDifferentDrivers= function (drivers, returnedDrivers){
    return returnedDrivers(drivers)
 }
 
