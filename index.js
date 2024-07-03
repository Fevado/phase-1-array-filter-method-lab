// Code your solution here
const drivers = [
   {
     name: 'Bobby',
     hometown: 'Pittsburgh' },
   {
     name: 'Sammy',
     hometown: 'New York' } ,
   {
     name: 'Sally',
     hometown: 'Cleveland' },
   {
     name: 'Annette',
     hometown: 'Los Angeles' },
   {
     name: 'Bobby',
     hometown: 'Tampa Bay' }
 ];


function findMatching(drivers, name){
   return drivers.filter(driver => driver.toUpperCase()=== name.toUpperCase())
}
//console.log(findMatching(drivers, 'Bobby'));

function fuzzyMatch(drivers,letter){
   return drivers.filter(function(driver){
      return driver.startsWith(letter)
   })
}
//console.log(fuzzyMatch(drivers, 'Bo'))

function matchName(drivers,name){
   return drivers.filter(function(driver){
      return driver.name.toUpperCase()===name.toUpperCase()
   })
}
//console.log(matchName(drivers, 'Bobby'));