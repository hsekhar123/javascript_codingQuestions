let num=15;

const fibbonnaciSeries=(n)=>{
    if(n<=1){
        return n;
    }else{
        return fibbonnaciSeries(n-1)+fibbonnaciSeries(n-2);
    }
}
for(let i=0;i<=num;i++){
    console.log(fibbonnaciSeries(i))
}