let str="Hello Welcome to Javasript program "
const checkingString=(str)=>{
    let ary=str.split(" ");
    let longest=""
    ary.forEach((elem)=>{
        if(elem.length>longest.length){
            longest=elem
        }
    })
    return longest;
}
let result=checkingString(str);
console.log(result)
