let limit=1000;
var i=1;
let sum=0;

for(i=1;i<limit;i++){
    if(i%3===0 || i%5===0)
    sum+=i;
}

console.log(sum);