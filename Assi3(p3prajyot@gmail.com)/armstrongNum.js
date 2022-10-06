n=153;
n1=n;
let sum=0;
while(n>=1)
{
    let l=n%10;
    sum+=l*l*l;
    n/=10;
    n=Math.floor(n);
}
if(sum===n1)
    console.log("armstrong number");
else
    console.log("not");