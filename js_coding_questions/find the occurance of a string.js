// let ary=[2,3,4,2,4,8,6,3,4,8,9,3,7,2]
let ary=["r","a","r",'f',"a","h","d","s","d"]
let findOccurance=(ar)=>{
    let obj={}
    ar.forEach((element)=>{
       obj[element]=(obj[element]||0)+1
    })
    return obj;
}
let result=findOccurance(ary)
console.log(result)