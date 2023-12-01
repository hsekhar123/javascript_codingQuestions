let str="Hello Javascript";

const removeVowel=(st)=>{
  let regx=st.replace(/[aeiou]/gi,"");
  return regx;
}
const result=removeVowel(str);
console.log(result)