// Code your solution here
const drivers = ["John", "Alice","ali","Bob", "Mike"];

 function findMatching(drivers,string){
    const lowerCaseName = string.toLowerCase();
    return  drivers.filter(driver=> driver.toLowerCase()===lowerCaseName)
         
 }



 const matchingDrivers =findMatching(drivers,"John")
 console.log(matchingDrivers )





function fuzzyMatch (drivers, query){

    return drivers.filter(driver => driver.toLowerCase().startsWith(query.toLowerCase()));



}
// console.log(fuzzyMatch(drivers,"a"))
function matchName (drivers, string){
return drivers.filter(driver=> driver.name===string)
}



 