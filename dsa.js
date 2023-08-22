isprime(7);
function isprime(n){
    var count=0;
    if(n==1 || n==2){
        console.log("prime")
        return;
    }
    for(let i=2; i*i<n; i++)
    {
        if(n%i==0){
            count++;
            break;
        }
    }
    if(count>0){
        console.log("not prime");
    }else{
        console.log("prime")
    }
}