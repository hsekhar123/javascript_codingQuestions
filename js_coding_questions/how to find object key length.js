const student ={ 
    name: 'John',
    age: 20,
    hobbies: ['reading', 'games', 'coding']
};

let count=0
for(let key in student){
    count++;
}
console.log(count);

// 2nd method

 student ={ 
    name: 'John',
    age: 20,
    hobbies: ['reading', 'games', 'coding']
};

const result=Object.keys(student).length;
console.log(result) 

