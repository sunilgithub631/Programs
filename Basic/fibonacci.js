let a=0
let b=1
function fibo(a,b){
    let c=0;
let n=10
for(let i=0;i<n;i++){
    if(Math.floor(i%2)!=0) console.log(a);
    c=a+b   
    a=b
    b=c
   
  
}
}
fibo(a,b)
const string = "hello world";
const removeDups = [... new Set(string.split(""))].join("")
console.log( typeof String);