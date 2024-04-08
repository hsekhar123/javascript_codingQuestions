let string="hello good afternoon"

function findVowels(str){
    let vowels=['a','e','i','o','u'];
    let count=0;
    for(let item of str.toLowerCase()){
        if(vowels.includes(item)){
            count++
        }
    }
    return count
}
console.log(findVowels(string));
//output -- 8