const ary_1=[2,3,4];
const ary_2=[3,2,4,5];

const checkArray=(ar_1,ar_2)=>{
return  ar_1.sort().length ==ar_2.sort().length && ar_1.every((ele,indx)=>ar_1[indx]==ar_2[indx])
}
const result=checkArray(ary_1,ary_2);
console.log(result);