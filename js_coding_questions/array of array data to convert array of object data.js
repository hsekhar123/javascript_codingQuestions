const data= [
    [
        1,
        "Breakfast"
    ],
    [
        2,
        "Lunch"
    ],
    [
        3,
        "Dinner"
    ],
]
// const result=Object.assign({},data)
// console.log(result)
const dropDown=[]
const result= data.map((item)=>{
   const value={label:item[1],value:item[0]}
   dropDown.push(value)
})
console.log(dropDown)