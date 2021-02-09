let part1 =  {name: 'jane'}, part2 = {age:22}, part3 = {city:'Seoul', country: 'Kr'};
let merged1 = {...part1, ...part2, ...part3}
let merged2 = {part1, ...part2, ...part3}
console.log(merged1)
console.log(merged2)