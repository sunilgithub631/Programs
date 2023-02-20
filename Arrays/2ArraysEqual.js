const a=[1,2,4,5,7]
const b=[2,5,1,7,4]
function equal(a,b){
    a.sort()
    b.sort()
    return Array.isArray(a) && Array.isArray(b) 
    && a.length===b.length 
    && a.every((val,index)=>val===b[index])
}
console.log(equal(a,b));
let sum=0
for(let i in a){
     sum+=a[i]
}
console.log(sum);
let obj=Object.assign({},a)
console.log(obj);