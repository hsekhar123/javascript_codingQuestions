let grades = [[89, 77, 78],[76, 82, 81],[91, 94, 89]];
let sum=0;
grades.forEach((ary)=>{
    sum+=ary.reduce((acc,cur)=> acc+cur,0)
})
console.log(sum)