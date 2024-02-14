//reverse an array with each element reversed
var s= ["i", "like", "this", "program", "very", "much"];

var newStr=""
s=s.join(' ')
for(var str in s){
    newStr+=s[(s.length-1)-str]
}
console.log(newStr);
// output "hcum yrev margorp siht ekil i"

// reverse an array but not element 
var s= ["i", "like", "this", "program", "very", "much"];

var newStr=""

s=s.reverse().join(' ')
for(var str in s){
    newStr+=s[(s.length-1)-str]
}
console.log(s);

//output  "much very program this like i"

//reverse the array element's index not reverse the original array
//exp-  i like javascript.   output be like=>> i ekil tpircsavaj.

var s= ["i", "like", "this", "program", "very", "much"];

var newStr=""
s=s.reverse().join(' ')
for(var str in s){
    newStr+=s[(s.length-1)-str]
}
console.log(newStr);

//output---> i ekil siht margorp yrev hcum