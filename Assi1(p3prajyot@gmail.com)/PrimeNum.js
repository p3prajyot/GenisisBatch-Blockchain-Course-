let n=7
let i=2
let res=true
while(i<=n/2)
{
    if(n%i===0){
    res=false
    break
    }
    i++
}
if(res)
console.log("Number is Prime Number");

else
console.log("Number is not prime");
