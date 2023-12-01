//ascnding order
let array=[26,43,12,65,23,90];

const ascendingOrder=(ary)=>{
    const sorted=ary.sort()
    return sorted;
}
const result=sortedArray(array);
console.log(result);


const desceningOrder=(ary)=>{
    const sorted=ary.sort((a,b)=>b-a);
}