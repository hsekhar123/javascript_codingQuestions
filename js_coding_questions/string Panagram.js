// panagram string-: those string which string have all letters are english alphabate [a-z]

const str = "The quick brown fox jumps over the lazy dog";
function checkPanagramString(str){
    let strData=new Set();
        for(var ch of str){
            if(ch >='a' && ch <='z'){
                strData.add(ch)
            }
            if(ch>="A" && ch<="Z"){
                ch=ch.toLowerCase()
                strData.add(ch)
            }
        }
    if(strData.size==26){
        return "It's a panagram string"
    }else{
          return "It's not a panagram string"
    }
 }
 const result=checkPanagramString(str)
console.log(result) 
// output => "It's a panagram string"
//input const str = "The quick brown fox jumps over the dog";
//output => "It's not a panagram string"

