const books = [
    { title: "C++", author: "Bjarne" },
    { title: "Java", author: "James" },
    { title: "Python", author: "Guido" },
    { title: "Java", author: "James" },
];

function removeDuplicate(ary){
  return ary.filter((obj,indx,array)=>{
      return indx== array.findIndex(eachObj=>eachObj.title===obj.title)
  })
}
const result=removeDuplicate(books);
console.log(result);

{/*
    ---output---
    [
        { title: 'C++', author: 'Bjarne' },
        { title: 'Java', author: 'James' },
        { title: 'Python', author: 'Guido' }
    ]
*/}
