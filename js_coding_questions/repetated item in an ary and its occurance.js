// let  ary=["abc","pqr","pqr","xyz","abc","abc","xyz","mno"];
let ary=[2,4,6,8,9,4,6,1,2,2,9,2]

let count={};
ary.forEach((item)=>{
    if(count[item]){
        count[item]++;
    }else{
        count[item]=1
    }
})
console.log(count);

//using reduce method

let aryNums=[2,4,6,8,9,4,6,1,2,2,9,2]

let result=aryNums.reduce((allnums,num)=>{
        // console.log(curr+prev);
        if(num in allnums){
            allnums[num]++;
        }else{
            allnums[num]=1
        }
        return allnums;
},{})
console.log(result);
// output ==={ '1': 1, '2': 4, '4': 2, '6': 2, '8': 1, '9': 2 }

// Write, Edit and Run your Javascript code using JS Online 

let array=[2,4,6,8,9,4,6,1,2,2,9,2]

let obj={};
function occurance(ar){
    ar.forEach((item)=>{
        obj[item]=(obj[item]||0)+1
    })
    return obj
}
console.log(occurance(array))

//for  string occurance 

const str="Hello Good Morning";

const findOccurance=(s)=>{
    let strAry=s.split("");
    const occurance={};
    strAry.forEach((elem)=>{
        // console.log(elem)
        if(occurance[elem]){
            occurance[elem]++
        }else{
            occurance[elem]=1
        }
    })
    return occurance;
}
result=findOccurance(str)
console.log(result);

// output =>{
//   H: 1,
//   e: 1,
//   l: 2,
//   o: 4,
//   ' ': 2,
//   G: 1,
//   d: 1,
//   M: 1,
//   r: 1,
//   n: 2,
//   i: 1,
//   g: 1
// }
