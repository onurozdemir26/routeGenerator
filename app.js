fly = [["JPN","PHL"],["BRA","UAE"],["USA","BRA"],["UAE","JPN"]];

flatArray=fly.flat();

uniqueValues = Array.from(new Set(flatArray));

startPoint = uniqueValues[(uniqueValues.length-1)]

const route =[];
route.push(startPoint);

for(var j=0; j<fly.length; j++){
  for(var i=0; i<fly.length; i++){
  if(fly[i][0] === startPoint){
    route.push(fly[i][1]);
    startPoint = fly[i][1];
    }
  }
}
console.log(route);