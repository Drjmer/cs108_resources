function isPrime(num){
        var x=num;
        let found=0;
        for(let i=2;i<Math.sqrt(x);i++){
                if(x%i===0)
                {
                    found=0;
                    break;
                }
                else{
                    found=1;
                }
            }
        return found;
    }