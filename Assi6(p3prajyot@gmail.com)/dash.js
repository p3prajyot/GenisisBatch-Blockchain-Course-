let num =1025468;
let text = num.toString();
let res="";
for(let i=0;i<=text.length-1;i++)
{
    res+=text[i];
    if(text[i]%2==0 && text[i+1]%2==0)
    res+="-";
}
console.log(res);
