// return the repeated item in an array
let ary=[2,3,4,5,6,2,23,54,7,9,6,3,1,56,1];

const result=ary.filter((value,indx)=>{
    return ary.indexOf(value)!==indx
})
console.log(result); // [2,3,6,1]

//remove duplicate item
const newAry=ary.filter((value,indx)=>{
    // return ary.indexOf(value)!==indx
    return ary.indexOf(value)===indx
})
console.log(newAry);

