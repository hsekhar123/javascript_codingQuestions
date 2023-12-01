let num=100;
const printPrimenumber=(n)=>{
      let ary=[]
    if(n<=0){
        return "cann't find the prime number"
    }else if(n==1){
        return "1 is not a prime number"
    }else{
        for(let i=2;i<num;i++){
            let flag=0;
          for(let j=2;j<i;j++){
             if(i%j==0){
                 flag=1;
                 break;
             }
          }
          if(flag==0 && i>1 ){
             ary.push(i)
          }
        }
         return ary;
    }
    
    
}
const result=printPrimenumber(num);
console.log(result)