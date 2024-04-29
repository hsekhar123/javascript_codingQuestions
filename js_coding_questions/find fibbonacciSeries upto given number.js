function fibbonaccieSeries(n){
    let fib=[0,1]
    for(let i=2;i<=n;i++){
        fib[i]=fib[i-1]+fib[i-2]
    }
    return fib.toString()
}
console.log(fibbonaccieSeries(3));
console.log(fibbonaccieSeries(10));
//output -- 
//0,1,1,2
//0,1,1,2,3,5,8,13,21,34,55