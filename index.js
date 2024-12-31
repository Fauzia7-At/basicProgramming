function primenum(num){
    if(num<=1){
       return false; 
    }
    for(let i =2;i<= Math.sqrt(num);i++){
        if(num%1==0){
            return false;
        // }found dividor not a prime
    }
 return true; //no divisor found return prime
    }
}
console.log(primenum(8))

// 