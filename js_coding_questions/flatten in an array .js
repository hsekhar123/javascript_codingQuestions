//-- to flat an array element---
const ary=[2,3,[4,5,[6,7,8,[9,[10]]]]];
const flatArray=(ar)=>{
    const result=[];
    ar.forEach((elem)=>{
        if(Array.isArray(elem)){
            result.push(...flatArray(elem))
        }else{
            result.push(elem)
        }
    })
    return result;
}
console.log(flatArray(ary))