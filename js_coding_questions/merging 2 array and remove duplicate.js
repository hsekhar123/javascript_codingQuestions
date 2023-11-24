const array_1=[1, 2, 3 , 4 , 5,8]
const array_2=[6,4,7,3,2,9,8];
function mergingTwoArray(ary1,ary2){
    let newAry=[...ary1,...ary2];
    let uniqueValues=[];
    for(let elem of newAry){
        // console.log(uniqueValues.includes(elem))
        if(!uniqueValues.includes(elem)){
            uniqueValues.push(elem)
        }
    }
    return uniqueValues
}
const result=mergingTwoArray(array_1,array_2);
console.log(result)


 array_1=[1, 2, 3 , 4 , 5,8]
 array_2=[6,4,7,3,2,9,8];
function mergingTwoArray(ary1,ary2){
    let newAry=[...ary1,...ary2];
    let uniqueValues=[];
    for(let elem of newAry){
        // console.log(uniqueValues.includes(elem))
        if(uniqueValues.indexOf(elem)===-1){
            uniqueValues.push(elem)
        }
    }
    return uniqueValues
}
result=mergingTwoArray(array_1,array_2);
console.log(result) 


