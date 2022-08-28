function fact_of_prime(n1,n2)
{
    if(n1!=1)
    var n=n1;
    else
    n=2;
    
    while(n<n2)
    {
        let f=1;
        for(i=2;i<=n/2;i++)
        {
            if(n%i==0){
                f=0;
                break;
            }
        }

        var fact=1;
        if(f==1)
        {
            for(j=n;j>0;j--)
            fact*=j;
            console.log("factorial of prime number ",n," is ",fact);
        }
        n++;
    }
}

fact_of_prime(1,100);