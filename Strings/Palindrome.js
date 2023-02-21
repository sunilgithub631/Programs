function palindram(value){
    let i=0;
    let j=value.length-1
    while(i<j){
        if(value.charAt(i++)!=value.charAt(j--)) return false
    }
    return true
}
console.log(palindram("malayalam"));
let st="sunil"
var rev=st.split("").reverse().join("")
console.log(rev);