let num1 = 153;
let num2 = 1000;
for (var i = num1; i <= num2; i++) {
  let sum = 0;
  let length = i.toString().length;
  let temp = i;
  while (temp > 0) {
    let rem = temp % 10;
    sum += rem ** length;
    temp = parseInt(temp / 10);
  }
  if (sum == i) {
    console.log(i);
  }
}
