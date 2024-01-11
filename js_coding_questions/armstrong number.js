let number=1533;
let checkArmstrong=(num)=>{
    let length=num.toString().length;
    let sum=0;
    let temp=num
    while(temp>0){
        let rem=temp%10;
        sum+=rem**length;
        temp=parseInt(temp/10)
    }
    if(sum===num){
        return "it's an armstrong number"
    }else{
         return "not armstrong number"
    }
}
console.log(checkArmstrong(number))