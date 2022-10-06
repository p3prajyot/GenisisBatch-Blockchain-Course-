let count=1;
let res;
for(let i=0;i<4;i++)
{
    res="";
    for(let j=0;j<=i;j++)
    {
        res+=count+" ";
        count++;
    }
    console.log(res);
}