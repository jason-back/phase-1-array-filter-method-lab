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


function findMatching(array, string) {
    return array.filter((el) => el.toLowerCase().includes(string.toLowerCase()))
}

function fuzzyMatch(array, query) {
    return array.filter((el) => el.toLowerCase().startsWith(query.toLowerCase()))
}

function matchName(array, string){
    return array.filter((obj) => obj.name === string)
}
console.log(matchName(drivers, 'Bobby'))