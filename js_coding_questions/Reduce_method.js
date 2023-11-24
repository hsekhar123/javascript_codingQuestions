const Data=[
  {
    name:'abc',
    books:["bibel","harry potter"],
    age:21
  },
  {
    name:'pqr',
    books:["War and peace","Romeo and Juliet"],
    age:30
  },
  {
    name:'xyz',
    books:["the lord of the rings","The shining"],
    age:16
  }
]
const result=Data.reduce((prev,cur,indx)=>{
    // console.log(indx,cur)
  return [...prev,...cur.books]
},[]);
console.log(result)
const ary=[]

console.log("result",ary);
//output  

// [
//   'bibel',
//   'harry potter',
//   'War and peace',
//   'Romeo and Juliet',
//   'the lord of the rings',
//   'The shining'
// ]