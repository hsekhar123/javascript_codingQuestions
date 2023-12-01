let num=8;
const factorialNumber=(n)=>{
    if(n==0){
        return 1
    }else{
        return n*factorialNumber(n-1)
    }
}
const result=factorialNumber(num)
console.log(result);