let str="sunil"
let char='l'
const removedChar=(string,char)=>{return str.split("").filter(i=>i!==char).join("")}
console.log(removedChar(str,char));