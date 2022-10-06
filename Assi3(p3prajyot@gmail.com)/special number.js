n=146;
n1=n;
let sum=0;
while(n>=1)
{
    let l=n%10;
    let factorial = 1;
    for(let i=1; i<=l; i++){
        factorial *= i;
    }
    sum+=factorial;
    n/=10;
    n=Math.floor(n);
}
if(sum===n1)
    console.log("special number");
else
    console.log("not");