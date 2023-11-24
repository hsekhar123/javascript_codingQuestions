// 1st method
const person_1 = {
    name: 'John',
    age: 21,
}
const person_2={...person_1};
person_1.age=30
console.log("person_1 =>>",person_1)
console.log("person_2 =>>",person_2)

// 2-method
person_1 = {
    name: 'John',
    age: 21,
 
}
person_2=JSON.parse(JSON.stringify(person_1))
person_1.age=34;

console.log("person_1 =>>",person_1)
console.log("person_2 =>>",person_2)

person_1 = {
    name: 'John',
    age: 21,
    address:{
        city:"Hyd",
        country:"IND"
    }
}
person_2=JSON.parse(JSON.stringify(person_1))
person_1.address.city="Mumbai"

console.log("person_1 =>>",person_1)
console.log("person_2 =>>",person_2)
{/*
output---
person_1 =>> { name: 'John', age: 21, address: { city: 'Mumbai', country: 'IND' } }
person_2 =>> { name: 'John', age: 21, address: { city: 'Hyd', country: 'IND' } }
*/}