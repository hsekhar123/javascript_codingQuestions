const books = [
    { title: "C++", author: "Bjarne",id:1 },
    { title: "Java", author: "James",id:2 },
    { title: "Python", author: "Guido",id:3 },
    { title: "Java", author: "James",id:2 },
    { title: "javascript", author: "Bjarne",id:4 },
    { title: "C", author: "David",id:5 },
    { title: "Python", author: "Guido",id:3 },
    { title: "Java", author: "James",id:2 },
];
const ids = books.map(({ title }) => title);
console.log(ids)
const result=books.filter(({title},index)=>{
   return !ids.includes(title,index+1)
})
console.log(result)
/*
[
  { title: 'C++', author: 'Bjarne', id: 1 },
  { title: 'javascript', author: 'Bjarne', id: 4 },
  { title: 'C', author: 'David', id: 5 },
  { title: 'Python', author: 'Guido', id: 3 },
  { title: 'Java', author: 'James', id: 2 }
]
*/
///-----method-2 --------

const removeDuplicate=(ary)=>{
  const obj={};
  const uniqueAry=ary.filter((item,index)=>{
      if(!obj[item.id]){
          obj[item.id]=true;
          return true
      }
      return false;
  })
  return uniqueAry;
}
console.log(removeDuplicate(books))
[
  { title: 'C++', author: 'Bjarne', id: 1 },
  { title: 'Java', author: 'James', id: 2 },
  { title: 'Python', author: 'Guido', id: 3 },
  { title: 'javascript', author: 'Bjarne', id: 4 },
  { title: 'C', author: 'David', id: 5 }
]
